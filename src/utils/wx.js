import axios from 'axios';
import { UrlBuilder } from './url';

export function IsWxEnv() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('micromessenger') != -1) {
        return true;
    } else {
        return false;
    }
}

export function WxGetAuthConnectUrl(scope = 'snsapi_base', state) {
    const appid = process.env['VUE_APP_WX_APP_ID'];
    const redirect_uri = new UrlBuilder(window.location).fragment('').query(null).toString();
    const response_type = 'code';
    const url = new UrlBuilder('https://open.weixin.qq.com/connect/oauth2/authorize')
        .fragment('wechat_redirect')
        .query({ appid, redirect_uri, response_type, scope, state })
        .toString();
    return url;
}

export function WxAuthConnect(scope = 'snsapi_base', state) {
    const url = WxGetAuthConnectUrl(scope, state);
    window.location.href = url;
}

export function WxAuthGetStatus() {
    const url = new UrlBuilder(window.location);
    const { code, state } = url.query();
    if (code) return { code, state };
    else return false;
}

export async function WxAuthGetOpenid() {
    const baseUrl = process.env['VUE_APP_WX_OPENID_BASE_URL'];
    if (!WxAuthGetStatus()) return false;
    const { code, state } = WxAuthGetStatus();
    const url = new UrlBuilder(baseUrl).query({ code }).toString();

    return new Promise((resolve, reject) => {
        axios({ method: 'get', url })
            .then(({ data }) => {
                resolve(data);
            })
            .catch(reject);
    });
}

let jsApiConfigUrl = '';
let jsApiList = [
    'scanQRCode',
    'hideAllNonBaseMenuItem',
    'updateAppMessageShareData',
    'updateTimelineShareData',
];

export async function WxJsApiSetup() {
    const pageUrl = new UrlBuilder(window.location).fragment('').toString();
    const baseUrl = process.env['VUE_APP_WX_JSAPI_TICKET_BASE_URL'];
    const url = new UrlBuilder(baseUrl).query({ url: pageUrl }).toString();

    return new Promise((resolve, reject) => {
        if (jsApiConfigUrl == pageUrl) return resolve();
        axios({ method: 'get', url })
            .then(({ data }) => {
                wx.config({ debug: false, ...data, jsApiList });
                wx.ready(() => {
                    jsApiConfigUrl = pageUrl;
                    resolve();
                });
                wx.error(res => {
                    reject(res);
                });
            })
            .catch(reject);
    });
}

export async function WxScanQRCode() {
    await WxJsApiSetup();
    return new Promise((resolve, reject) => {
        wx.scanQRCode({
            needResult: 1,
            scanType: ["qrCode", "barCode"],
            success: res => resolve(res.resultStr),
            fail: res => reject(res)
        });
    })
}

export async function WxHideAllNonBaseMenuItem() {
    await WxJsApiSetup();
    wx.hideAllNonBaseMenuItem();
}

export async function WxUpdateAppMessageShareData(title, desc, link, imgUrl) {
    await WxJsApiSetup();
    return new Promise((resolve, reject) => {
        wx.updateAppMessageShareData({
            title, desc, link, imgUrl,
            success: resolve,
            fail: reject
        })
    })

}

export async function WxUpdateTimelineShareData(title, link, imgUrl) {
    await WxJsApiSetup();
    return new Promise((resolve, reject) => {
        wx.updateTimelineShareData({
            title, link, imgUrl,
            success: resolve,
            fail: reject
        })
    })
}
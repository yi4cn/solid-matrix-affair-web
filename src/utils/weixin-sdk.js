import { UrlBuilder } from './url';
import { JsonRpcClient } from './json-rpc';
import { Exception } from 'sass';

const jsApiList = [
  'scanQRCode',
  'hideAllNonBaseMenuItem',
  'updateAppMessageShareData',
  'updateTimelineShareData',
];

export function IsWxEnv() {
  var ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf('micromessenger') != -1) {
    return true;
  } else {
    return false;
  }
}

export function IsWxIPhoneEnv() {
  var ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf('iphone') != -1) {
    return true && IsWxEnv();
  } else {
    return false;
  }
}

async function fetchJsConfig(url) {
  const jrpcUrl = process.env['VUE_APP_IDENTITY_RPC_URL'];
  const jrpc = new JsonRpcClient(jrpcUrl);
  const config = await jrpc.request('auth.weixinJsConfig', { url });
  return config;
}

// to record the url, if changed url, then need to refresh jsApiConfig
let jsApiConfigUrl = '';
// record the original Url
const originalUrl = new UrlBuilder(window.location).fragment('').toString();

async function WxJsApiSetup() {
  if (!IsWxEnv()) throw new Exception("not in weixin environment");
  // to fix the incompatibility between vue and iphone weixin environment; iphone will use the entry url; android will use the current url
  const nowUrl = new UrlBuilder(window.location).fragment('').toString();
  const url = IsWxIPhoneEnv() ? originalUrl : nowUrl;

  return new Promise((resolve, reject) => {
    if (jsApiConfigUrl == url) return resolve();

    fetchJsConfig(url)
      .then(config => {
        wx.config({ debug: false, ...config, jsApiList });
        wx.ready(() => {
          jsApiConfigUrl = url;
          resolve();
        });
        wx.error(res => reject(res));
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
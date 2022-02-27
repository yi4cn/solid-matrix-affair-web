import { JsonRpcClient } from './json-rpc';
import { UrlBuilder } from './url';
import { IsWxEnv as _IsWxEnv } from './weixin-sdk';
export const IsWxEnv = _IsWxEnv;

const appid = process.env['VUE_APP_WX_APP_ID'];

export function WxAuthBuildConnectUrl(redirectUri, state, scope = 'snsapi_base') {
  const redirect_uri = new UrlBuilder(redirectUri).fragment('').query(null).toString();
  const response_type = 'code';
  const url = new UrlBuilder('https://open.weixin.qq.com/connect/oauth2/authorize')
    .fragment('wechat_redirect')
    .query({ appid, redirect_uri, response_type, scope, state })
    .toString();
  return url;
}

export function WxAuthConnect(redirectUri, state, scope = 'snsapi_base') {
  const url = WxAuthBuildConnectUrl(redirectUri, state, scope);
  window.location.href = url;
}


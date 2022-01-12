/*
appid               公众号的唯一标识
redirect_uri        授权后重定向的回调链接地址， 请使用 urlEncode 对链接进行处理
response_type       返回类型，请填写code
scope               应用授权作用域，snsapi_base （不弹出授权页面，直接跳转，只能获取用户openid），snsapi_userinfo （弹出授权页面，可通过openid拿到昵称、性别、所在地。并且， 即使在未关注的情况下，只要用户授权，也能获取其信息 ）
state               重定向后会带上state参数，开发者可以填写a-zA-Z0-9的参数值，最多128字节
#wechat_redirect    无论直接打开还是做页面302重定向时候，必须带此参数
*/
export const wxBaseConnectUrl = "https://open.weixin.qq.com/connect/oauth2/authorize";
export const wxConnectUrlHash = "#wechat_redirect";
export const wxConnectUrlScopeBase = "snsapi_base";
export const wxConnectUrlScopeUserinfo = "snsapi_userinfo";
export const wxConnectUrlResponseType = "code";

export function getWxConnectUrl(appid, redirect_uri, scope = wxConnectUrlScopeBase, state, response_type = wxConnectUrlResponseType) {

    const params = { appid, redirect_uri, response_type, scope, state };
    const search = Object.keys(params)
        .map(name => params[name] ? [name, encodeURI(params[name])].join("=") : null)
        .filter(Boolean)
        .join("&");
    return wxBaseConnectUrl + "?" + search + wxConnectUrlHash;
}

export function getWxRedirectParams(url = window.location) {
    const myUrl = new URL(url);
    const code = myUrl.searchParams.get("code");
    const state = myUrl.searchParams.get("state");
    const baseUrl = myUrl.origin + myUrl.pathname;
    return { code, state, baseUrl };
}

export function isWxEnv() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('micromessenger') != -1) {
        return true;
    } else {
        return false;
    }
}
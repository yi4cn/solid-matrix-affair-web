import { getWxConnectUrl, getWxRedirectParams } from '@/utils/wx';
import { wxBaseConnectUrl, wxConnectUrlHash, wxConnectUrlScopeBase, wxConnectUrlScopeUserinfo, wxConnectUrlResponseType } from '@/utils/wx';
import { expect } from 'chai';

const appid = "wxb512edaac143b351";
const redirectUrl = "https://www.a.com/home";

describe('utils.wx', () => {
  describe('getWxConnectUrl', () => {
    it('brief use', () => {
      const url = new URL(getWxConnectUrl(appid, redirectUrl));

      expect(url.origin + url.pathname).to.equal(wxBaseConnectUrl);
      expect(url.searchParams.get("appid")).to.equal(appid);
      expect(url.searchParams.get("redirect_uri")).to.equal(redirectUrl);
      expect(url.searchParams.get("response_type")).to.equal(wxConnectUrlResponseType);
      expect(url.searchParams.get("scope")).to.equal(wxConnectUrlScopeBase);
      expect(url.searchParams.get("state")).to.not.exist;
      expect(url.hash).to.equal(wxConnectUrlHash);
    });
    it('full use', () => {
      const state = "state";
      const url = new URL(getWxConnectUrl(appid, redirectUrl, wxConnectUrlScopeUserinfo, state));

      expect(url.origin + url.pathname).to.equal(wxBaseConnectUrl);
      expect(url.searchParams.get("appid")).to.equal(appid);
      expect(url.searchParams.get("redirect_uri")).to.equal(redirectUrl);
      expect(url.searchParams.get("response_type")).to.equal(wxConnectUrlResponseType);
      expect(url.searchParams.get("scope")).to.equal(wxConnectUrlScopeUserinfo);
      expect(url.searchParams.get("state")).to.equal(state);
      expect(url.hash).to.equal(wxConnectUrlHash);
    });
  });
  describe("getWxRedirectParams", () => {
    it('if no state', () => {
      const url = "https://www.suosuotex.com/?code=code";

      const { code, state } = getWxRedirectParams(url);
      expect(code).to.equal("code");
      expect(state).to.not.exist;
    });
    it('if with state', () => {
      const url = "https://www.suosuotex.com/?code=code2&state=state2";

      const { code, state } = getWxRedirectParams(url);
      expect(code).to.equal("code2");
      expect(state).to.equal("state2");
    });
  });
})

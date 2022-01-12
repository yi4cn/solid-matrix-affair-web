<script>
import { isWxEnv, getWxConnectUrl, getWxRedirectParams } from "@/utils/wx";
import { h, reactive } from "@vue/runtime-core";
import smLoadingPage from "./sm-loading-page.vue";

const WX_PAGE_STAT = {
  INITIAL: 0,
  TO_CONNECT: 1,
  TO_AUTH: 2,
  AUTHED: 3,
};

const appid = process.env["VUE_APP_WX_APPID"];
const redirectUrl = window.location.origin + window.location.pathname;
const wxConnectUrl = getWxConnectUrl(appid, redirectUrl);

export default {
  setup(_, { slots }) {
    const state = reactive({
      wxstat: WX_PAGE_STAT.INITIAL,
    });

    if (isWxEnv()) state.wxstat = WX_PAGE_STAT.TO_CONNECT;

    const { code } = getWxRedirectParams();
    if (code !== null) {
      state.wxstat = WX_PAGE_STAT.TO_AUTH;
      // auth by auth
      new Promise((res) => {
        setTimeout(() => res(), 1000);
      }).then(() => {
        state.wxstat = WX_PAGE_STAT.AUTHED;
      });
    }

    return () => {
      if (state.wxstat === WX_PAGE_STAT.INITIAL) {
        return h(slots.default);
      } else if (state.wxstat === WX_PAGE_STAT.TO_CONNECT) {
        window.location.href = wxConnectUrl;
      } else if (state.wxstat === WX_PAGE_STAT.TO_AUTH) {
        return h(smLoadingPage);
      } else if (state.wxstat === WX_PAGE_STAT.AUTHED) {
        return h(slots.default);
      }
    };
  },
};
</script>

<style>
</style>

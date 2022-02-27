<template>
  <sm-loading-page />
</template>
<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { inject } from "vue";
import { UrlBuilder } from "@/utils/url";
import { WxAuthConnect } from "@/utils/weixin-auth";

const router = useRouter();
const store = useStore();
const alert = inject("sm-alert");

const { code, state } = router.currentRoute.value.query;

const toPath = state ? state : router.resolve({ name: "dashboard" });

store
  .dispatch("weixinLogin", { code })
  .then(() => {
    alert.success("登录成功");
    router.push(toPath);
  })
  .catch(() => {
    alert.error("登陆失败");
    const redirectUrl = new UrlBuilder(window.location)
      .path(router.resolve({ name: "login" }).path)
      .toString();
    WxAuthConnect(redirectUrl, state);
  });
</script>
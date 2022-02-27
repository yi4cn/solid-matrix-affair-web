<template>
  <sm-loading-page v-if="!loggedIn" />
  <slot></slot>
</template>

<script setup>
import { computed, inject } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { UrlBuilder } from "@/utils/url";
import { IsWxEnv, WxAuthConnect } from "@/utils/weixin-auth";

const router = useRouter();
const store = useStore();
const alert = inject("sm-alert");

const currentRoute = router.currentRoute.value;

const loggedIn = computed(() => store.getters.isLoggedIn);

if (!loggedIn.value) {
  if (IsWxEnv()) {
    const redirectUrl = new UrlBuilder(window.location)
      .path(router.resolve({ name: "weixin-auth" }).path)
      .toString();
    WxAuthConnect(redirectUrl, currentRoute.fullPath);
  } else {
    router.push({ name: "login" });
  }
}
</script>
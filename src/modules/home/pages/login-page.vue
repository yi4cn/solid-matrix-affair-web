<template>
  <base-layout title="登录">
    <div class="weixin-login" v-if="isWxEnv">
      <sm-hr text="微信登录" />
      <sm-input-button @click="weixinAuthConnect">登录</sm-input-button>
    </div>

    <sm-blank size="xs" />

    <div class="weixin-register" v-if="isWxEnv">
      <sm-hr text="微信申请权限" />
      <sm-input-group>
        <sm-input-label>用户名称</sm-input-label>
        <sm-input-text ref="weixinRegisterNickname"></sm-input-text>
        <sm-input-button @click="weixinRegister">申请</sm-input-button>
      </sm-input-group>
    </div>

    <sm-blank size="xs" />

    <div class="account-login">
      <sm-hr text="账号登录" />
      <sm-input-group>
        <sm-input-label>账号</sm-input-label>
        <sm-input-text ref="accountLoginUsername"></sm-input-text>
      </sm-input-group>
      <sm-blank size="xs" />
      <sm-input-group>
        <sm-input-label>密码</sm-input-label>
        <sm-input-text password ref="accountLoginPassword"></sm-input-text>
      </sm-input-group>
      <sm-blank size="xs" />
      <sm-input-button @click="accountLogin">登录</sm-input-button>
    </div>
  </base-layout>
</template>
<script setup>
import BaseLayout from "@/components/base-layout.vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { ref, inject } from "vue";
import { UrlBuilder } from "@/utils/url";
import { WxAuthConnect, IsWxEnv } from "@/utils/weixin-auth";

const router = useRouter();
const store = useStore();
const alert = inject("sm-alert");

// check if it is in weixin browser environment
const isWxEnv = IsWxEnv();

const { code, state } = router.currentRoute.value.query;

function weixinAuthConnect() {
  const redirectUrl = new UrlBuilder(window.location)
    .path(router.resolve({ name: "weixin-auth" }).path)
    .toString();
  WxAuthConnect(redirectUrl, state);
}

const weixinRegisterNickname = ref("");
function weixinRegister() {
  const nickname = weixinRegisterNickname.value.value || "";
  if (!nickname || nickname.length == 0) return;

  store
    .dispatch("weixinRegister", { nickname, code })
    .then(() => {
      alert.success("申请成功");
    })
    .catch((err) => {
      alert.error("申请失败" + err.message);
    });
}

const accountLoginUsername = ref("");
const accountLoginPassword = ref("");

function accountLogin() {
  const username = accountLoginUsername.value.value;
  const password = accountLoginPassword.value.value;

  store
    .dispatch("accountLogin", { username, password })
    .then(() => {
      alert.success("登录成功");
      if (state) {
        router.push(state);
      } else {
        router.back();
      }
    })
    .catch((err) => {
      alert.error("登录失败");
    });
}
</script>
<style lang="scss" scoped>
@import "@/assets/const.scss";
.weixin-login {
  padding: $size-2;
  text-align: center;
}
.weixin-register {
  padding: $size-2;
  text-align: center;
}
.account-login {
  padding: $size-2;
  text-align: center;
}
</style>
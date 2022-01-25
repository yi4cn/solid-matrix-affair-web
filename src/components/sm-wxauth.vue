<template>
  <sm-loading-page v-if="!ready" />
  <slot v-else></slot>
</template>
<script setup>
import {
  IsWxEnv,
  WxAuthConnect,
  WxAuthGetStatus,
  WxAuthGetOpenid,
} from "@/utils/wx";

import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const WX_PAGE_STAT = {
  INITIAL: 0,
  TO_CONNECT: 1,
  TO_AUTH: 2,
  AUTHED: 3,
};

const state = ref(WX_PAGE_STAT.INITIAL);
const ready = ref(false);

onMounted(() => {
  if (IsWxEnv()) {
    state.value = WX_PAGE_STAT.TO_CONNECT;
    if (WxAuthGetStatus()) {
      state.value = WX_PAGE_STAT.TO_AUTH;
    }
  }

  if (state.value === WX_PAGE_STAT.INITIAL) {
    ready.value = true;
  } else if (state.value === WX_PAGE_STAT.TO_CONNECT) {
    WxAuthConnect();
  } else if (state.value === WX_PAGE_STAT.TO_AUTH) {
    WxAuthGetOpenid().then((res) => {
      const { openid } = res;
      router.replace({ query: {} });
      state.value = WX_PAGE_STAT.AUTHED;
      ready.value = true;
    });
  }
});
</script>
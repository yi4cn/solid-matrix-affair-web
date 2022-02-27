<template>
  <div class="wrapper">
    <h1>Test 1 Page</h1>
    <h2>Basic Info</h2>
    <div><b>Current Url:</b> {{ currentUrl }}</div>
    <div><b>UserAgent：</b> {{ userAgent }}</div>

    <h2>Environment</h2>
    <div v-if="IsWxEnv()">In Weixin Browser</div>
    <div v-else>Not In Weixin Browser</div>

    <h2>Console</h2>
    <pre><code id="console"></code></pre>

    <h2>Scan QR Code</h2>
    <sm-input-button @click="scan">Scan</sm-input-button>
  </div>
</template>
<script setup>
import { IsWxEnv, WxScanQRCode } from "@/utils/weixin-sdk";

console.debug = (...data) => {
  document.getElementById("console").innerHTML +=
    data.map((obj) => obj.toString()).join(" ") + "\n";
};

const currentUrl = window.location;
const userAgent = window.navigator.userAgent;

const scan = () => {
  WxScanQRCode()
    .then((code) => console.debug("Scan Success", code))
    .catch((err) => console.debug("Scan Fail", JSON.stringify(err)));
};
</script>
<style lang="scss" scoped>
.wrapper {
  padding: 16px;
}
</style>
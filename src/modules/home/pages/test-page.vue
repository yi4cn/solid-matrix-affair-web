<template>
  <div class="wrapper">
    <h1>Test Page</h1>

    <h2>Current Url</h2>
    <div>{{ currentUrl }}</div>

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
import { IsWxEnv, WxScanQRCode } from "@/utils/wx";

console.debug = (...data) => {
  document.getElementById("console").innerHTML +=
    data.map((obj) => obj.toString()).join(" ") + "\n";
};

const currentUrl = window.location;

const scan = () => {
  WxScanQRCode()
    .then((code) => console.debug("Scan Success", code))
    .catch((res) => console.debug("Scan Fail", JSON.stringify(res)));
};
</script>
<style lang="scss" scoped>
.wrapper {
  padding: 16px;
}
</style>
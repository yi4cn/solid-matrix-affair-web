<template>
  <div class="placeholder" />
  <div class="scan-btn-wrapper">
    <sm-input-button class="scan-btn" @click="scan">扫码</sm-input-button>
  </div>
</template>
<script setup>
import { defineEmits } from "vue";
const emit = defineEmits(["onScan"]);
const scan = () => {
  emit("onScan", "sample-code");
};
</script>
<style lang="scss" scoped>
@import "@/assets/const.scss";

.scan-btn-wrapper {
  position: fixed;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  padding: $size-1 $size-1 $size-2 $size-1;
}
.placeholder {
  height: $size-8 + $size-3;
}
.scan-btn {
  height: $size-8;
  background-color: $success-color;
  border-color: $success-color;
  box-sizing: border-box;
  width: 100%;
  box-shadow: 0 0 $size-2 $dark-0-color;
  font-size: $xl-font-size;
  padding: $size-2 0;
}
</style>
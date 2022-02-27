<template>
  <sm-title title="商品查询" />
  <panel-layout title="商品查询">
    <template v-slot:afterFooter>
      <scan-button @onScan="scan" />
    </template>
  </panel-layout>
</template>

<script setup>
import ScanButton from "../components/scan-button.vue";
import PanelLayout from "../components/panel-layout.vue";

const scan = (code) => console.log(code);
</script>

<style lang="scss" scoped>
@import "@/assets/const.scss";
</style>;
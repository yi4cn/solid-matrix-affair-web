<template>
  <sm-title title="快速出仓" />
  <panel-layout title="快速出仓">
    <div class="wrapper">
      <sm-list>
        <sm-list-item title>出仓清单</sm-list-item>
        <sm-list-item>1</sm-list-item>
        <sm-list-item>1</sm-list-item>
        <sm-list-item>1</sm-list-item>
        <sm-list-item>1</sm-list-item>
        <sm-list-item>1</sm-list-item>
        <sm-list-item>1</sm-list-item>
        <sm-list-item>1</sm-list-item>
        <sm-list-item>1</sm-list-item>
        <sm-list-item>1</sm-list-item>
      </sm-list>
    </div>
    <template v-slot:afterFooter>
      <scan-button @onScan="scan" />
    </template>
  </panel-layout>
</template>

<script setup>
import PanelLayout from "../components/panel-layout.vue";
import ScanButton from "../components/scan-button.vue";
import { inject, ref } from "vue";

const item = ref({});
const items = ref([]);
const alert = inject("sm-alert");

const scan = (code) => {
  alert.success(code);
};
</script>

<style lang="scss" scoped>
@import "@/assets/const.scss";

.wrapper {
  padding: $size-2;
}
</style>;

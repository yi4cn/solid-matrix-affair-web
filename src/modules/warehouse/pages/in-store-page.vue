<template>
  <sm-title title="快速入仓" />
  <warehouse-layout title="快速入仓">
    <div class="wrapper">
      <sm-list>
        <sm-list-item title>入仓清单</sm-list-item>
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
  </warehouse-layout>
</template>

<script setup>
import WarehouseLayout from "../components/warehouse-layout.vue";
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

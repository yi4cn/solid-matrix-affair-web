<template>
  <sm-title title="商品查询" />
  <warehouse-layout title="商品查询">
    <template v-slot:afterFooter>
      <scan-button @onScan="scan" />
    </template>
  </warehouse-layout>
</template>

<script setup>
import WarehouseLayout from "../components/warehouse-layout.vue";
import ScanButton from "../components/scan-button.vue";
const scan = (code) => console.log(code);
</script>

<style lang="scss" scoped>
@import "@/assets/const.scss";
</style>;
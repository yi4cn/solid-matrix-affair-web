<template>
  <sm-title title="In Stock" />
  <warehouse-layout title="In Stock"> <div>In Stock</div> </warehouse-layout>
</template>

<script>
import WarehouseLayout from "../components/warehouse-layout.vue";

export default {
  components: { WarehouseLayout },
};
</script>

<style lang="scss" scoped>
@import "@/assets/const.scss";
</style>;

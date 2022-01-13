<template>
  <sm-title title="Out Stock" />
  <warehouse-layout title="Out Stock"> <div>Out Stock</div> </warehouse-layout>
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

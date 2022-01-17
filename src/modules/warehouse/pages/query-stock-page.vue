<template>
  <sm-title title="商品查询" />
  <warehouse-layout title="商品查询">
    <div class="wrapper">
      <sm-input-group>
        <sm-input-label>花型号</sm-input-label>
        <sm-input-text />
      </sm-input-group>
      <sm-blank size="xs" />
      <div>
        <sm-tree value="Top Level">
          <sm-tree value="2">
            <sm-tree value="3"></sm-tree>
          </sm-tree>
          <sm-tree value="3"></sm-tree>
          <sm-tree value="3"></sm-tree>
          <sm-tree value="3"></sm-tree>
        </sm-tree>
      </div>
    </div>
  </warehouse-layout>
</template>

<script setup>
import WarehouseLayout from "../components/warehouse-layout.vue";
// import { useStore } from "vuex";
// import { computed } from "vue";

// const items = computed(() => []);
// const store = useStore();
// const itemDict = computed(() => {
//   const res = {};
//   for (let i = 0; i < items.length; i++) {
//     const name = items.name
//   }
// });
</script>

<style lang="scss" scoped>
@import "@/assets/const.scss";
.wrapper {
  padding: 16px;
}
</style>;

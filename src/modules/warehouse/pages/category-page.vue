<template>
  <sm-title title="品类管理" />
  <warehouse-layout title="品类管理">
    <div class="wrapper">
      <categories-list :editable="editable" :categories="categories" />
    </div>
  </warehouse-layout>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import CategoriesList from "../components/categories-list.vue";
import WarehouseLayout from "../components/warehouse-layout.vue";

const store = useStore();
store.dispatch("warehouse/fetchCategories");

const editable = ref(true);
const categories = computed(() => store.state.warehouse.categories);
</script>

<style lang="scss" scoped>
@import "@/assets/const.scss";
.wrapper {
  padding: 16px;
}
</style>;

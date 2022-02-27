<template>
  <sm-title title="品类管理" />
  <panel-layout title="品类管理">
    <div class="wrapper">
      <categories-list :editable="editable" :categories="categories" />
    </div>
  </panel-layout>
</template>

<script setup>
import { computed, ref, inject } from "vue";
import { useStore } from "vuex";
import CategoriesList from "../components/categories-list.vue";
import PanelLayout from "../components/panel-layout.vue";

const alert = inject("sm-alert");

const store = useStore();

store
  .dispatch("warehouse/fetchCategories")
  .then(() => alert.success("载入成功"))
  .catch(() => alert.error("载入失败"));

const editable = ref(true);
const categories = computed(() => store.state.warehouse.categories);
</script>

<style lang="scss" scoped>
@import "@/assets/const.scss";
.wrapper {
  padding: 16px;
}
</style>;

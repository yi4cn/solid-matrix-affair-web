<template>
  <div>
    <sm-modal :visible="modalVisible" @onHide="hideModal">
      <category-edit-input :category="category" @onSubmit="onSubmit" />
    </sm-modal>
    <sm-list>
      <sm-list-item title class="title"
        >品类
        <sm-input-button
          v-if="editable"
          class="new-btn"
          @click="editCategory({})"
          >新建</sm-input-button
        ></sm-list-item
      >
      <sm-list-item v-for="category in categories" :key="category.id">
        <sm-input-button
          v-if="editable"
          class="edit-btn"
          @click="editCategory(category)"
          >编辑</sm-input-button
        >
        <sm-tag class="initial">{{ category.initial }}</sm-tag>
        <span class="name">{{ category.name }}</span>
      </sm-list-item>
    </sm-list>
  </div>
</template>
<script setup>
import { defineProps, ref } from "vue";
import CategoryEditInput from "./category-edit-input.vue";

const category = ref({});
const modalVisible = ref(false);

const showModal = () => (modalVisible.value = true);
const hideModal = () => (modalVisible.value = false);

const editCategory = (c) => {
  showModal();
  category.value = c;
};

const onSubmit = (c) => {
  console.log(c);
  hideModal();
};

defineProps({
  categories: Array,
  editable: Boolean,
});
</script>
<style lang="scss" scoped>
.title {
  text-align: center;
}
.new-btn {
  margin: 0 8px;
}
.edit-btn {
  margin: 0 8px;
}
.initial {
  margin: 0 8px;
}

.name {
  margin: 0 8px;
}
</style>
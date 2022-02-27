<template>
  <div>
    <sm-modal :visible="modalVisible" @onHide="hideModal">
      <category-edit-input :category="category" @onSubmit="onSubmit" />
    </sm-modal>
    <sm-list>
      <sm-list-item title class="title">品类</sm-list-item>
      <sm-list-item v-for="category in categories" :key="category.id">
        <sm-input-button
          v-if="editable"
          class="edit-btn"
          @click="editCategory(category)"
          >编辑</sm-input-button
        >
        <sm-input-button
          v-if="editable"
          class="delete-btn"
          @click="deleteCategory(category)"
          >删除</sm-input-button
        >
        <sm-tag class="initial">{{ category.initial }}</sm-tag>
        <span class="name">{{ category.name }}</span>
      </sm-list-item>

      <sm-list-item
        ><sm-input-button
          v-if="editable"
          class="new-btn"
          @click="editCategory({})"
          >新建</sm-input-button
        >
      </sm-list-item>
    </sm-list>
  </div>
</template>
<script setup>
import { defineProps, inject, ref } from "vue";
import { useStore } from "vuex";
import CategoryEditInput from "./category-edit-input.vue";

const store = useStore();
const alert = inject("sm-alert");

const category = ref({});
const modalVisible = ref(false);

const showModal = () => (modalVisible.value = true);
const hideModal = () => (modalVisible.value = false);

const editCategory = (c) => {
  showModal();
  category.value = c;
};

const onSubmit = (c) => {
  if (c.id) {
    store
      .dispatch("warehouse/updateCategory", { id: c.id, data: c })
      .then(() => alert.success("更新成功"))
      .catch(() => alert.error("更新失败"));
  } else {
    store
      .dispatch("warehouse/createCategory", { data: c })
      .then(() => alert.success("创建成功"))
      .catch(() => alert.error("创建失败"));
  }

  hideModal();
};

const deleteCategory = (c) => {
  store
    .dispatch("warehouse/deleteCategory", { id: c.id })
    .then(() => alert.success("删除成功"))
    .catch(() => alert.error("删除失败"));
};

defineProps({
  categories: Array,
  editable: Boolean,
});
</script>
<style lang="scss" scoped>
@import "@/assets/const.scss";

.title {
  text-align: center;
}
.new-btn {
  margin: 0 4px;
}
.edit-btn {
  margin: 0 4px;
}
.delete-btn {
  margin: 0 4px;
  background-color: $error-color;
}
.initial {
  margin: 0 4px;
}

.name {
  margin: 0 4px;
}
</style>
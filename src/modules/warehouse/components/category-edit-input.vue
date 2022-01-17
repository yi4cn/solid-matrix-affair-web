<template>
  <div>
    <sm-input-group class="input-group">
      <sm-input-label>简写</sm-input-label>
      <sm-input-text :defaultValue="category.initial" ref="categoryInitial" />
    </sm-input-group>
    <sm-input-group class="input-group">
      <sm-input-label>全称</sm-input-label>
      <sm-input-text :defaultValue="category.name" ref="categoryName" />
    </sm-input-group>
    <sm-input-group class="input-group" direction="right">
      <sm-input-hidden :defaultValue="category.id" ref="categoryId" />
      <sm-input-button @click="submit">确认</sm-input-button>
    </sm-input-group>
  </div>
</template>
<script setup>
import { defineProps, defineEmits, ref } from "vue";
defineProps({
  category: Object,
});

const categoryInitial = ref();
const categoryName = ref();
const categoryId = ref();

const emit = defineEmits(["onSubmit"]);

const submit = () =>
  emit("onSubmit", {
    id: categoryId.value.value,
    initial: categoryInitial.value.value,
    name: categoryName.value.value,
  });
</script>
<style lang="scss" scoped>
.input-group {
  margin: 8px auto;
}
</style>
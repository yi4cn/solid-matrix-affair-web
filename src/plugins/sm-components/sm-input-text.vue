<template>
  <input :type="type" class="sm-input-text" v-model="textValue" />
</template>
<script setup>
import { defineProps, defineExpose, ref } from "vue";
const props = defineProps({
  search: Boolean,
  password: Boolean,
  defaultValue: String,
});

const type = props.search ? "search" : props.password ? "password" : "text";

const textValue = ref(props.defaultValue || "");

defineExpose({
  value: textValue,
});
</script>
<style lang="scss">
@import "@/assets/const.scss";
.sm-input-text {
  -webkit-appearance: none;
  border-radius: 0;
  outline: none;
  display: inline-block;
  box-sizing: content-box;
  width: auto;
  padding: 8px;
  margin: 0;
  border: 1px $primary-color solid;
  line-height: 1em;
  font-size: 1em;
  background-color: $auxiliary-color;
  color: $primary-color;
  cursor: pointer;
}
</style>
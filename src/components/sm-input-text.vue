<template>
  <input
    :type="search ? 'search' : 'text'"
    class="sm-input-text"
    v-model="value"
  />
</template>
<script setup>
import { defineProps, defineExpose, ref } from "vue";
const props = defineProps({
  search: Boolean,
  defaultValue: String,
});

const value = ref(props.defaultValue);

defineExpose({
  value,
});
</script>
<style lang="scss">
@import "@/assets/const.scss";
.sm-input-text {
  -webkit-appearance: none;
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
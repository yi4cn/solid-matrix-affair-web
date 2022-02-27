<template>
  <div class="sm-hr">
    <div class="sm-hr-before"></div>
    <div class="sm-hr-text" v-if="text">{{ text }}</div>
    <div class="sm-hr-after"></div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
defineProps({
  text: String,
});
</script>
<style lang="scss" scoped>
@import "@/assets/const.scss";
.sm-hr {
  color: $primary-color;
  display: flex;
  padding: $size-2 0;
  .sm-hr-before {
    flex-grow: 1;
    height: 1px;
    border-top: 1px solid $primary-color;
    align-self: center;
  }
  .sm-hr-text {
    flex-grow: 0;
    padding: 0 $size-1;
  }
  .sm-hr-after {
    flex-grow: 1;
    height: 1px;
    border-top: 1px solid $primary-color;
    align-self: center;
  }
}
</style>
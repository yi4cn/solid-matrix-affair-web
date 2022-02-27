<template>
  <span class="sm-icon">
    <render class="sm-icon-svg" />
  </span>
</template>
<script setup>
import { defineProps } from "vue";
import icons from "./icons";
const props = defineProps({ icon: String });
const render = () => icons[props.icon];
</script>
<style lang="scss" scoped >
.sm-icon {
  line-height: 0;
  vertical-align: -0.125em;
  .sm-icon-svg {
    display: inline-block;
    box-sizing: border-box;
    font-style: normal;
    text-align: center;
    text-transform: none;
    text-rendering: optimizeLegibility;
    width: 1em;
    height: 1em;
    line-height: 1;
  }
}
</style>


<template>
  <div class="sm-tree">
    <div class="sm-tree-value" @click="toggle">
      <span class="sm-tree-icon">
        <sm-icon v-if="haveChildren && open" icon="tree-open" />
        <sm-icon v-else-if="haveChildren && !open" icon="tree-close" />
        <sm-icon v-else icon="dot" />
      </span>
      <span> {{ value }}</span>
    </div>
    <div class="sm-tree-children" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>
<script setup>
import { defineProps, useSlots, ref, computed } from "vue";
defineProps({
  value: String,
});

const open = ref(false);
const slots = useSlots();
const haveChildren = computed(() => (slots.default ? true : false));
const toggle = () => (open.value = !open.value);
</script>
<style lang="scss" scoped>
@import "@/assets/const.scss";
.sm-tree {
  .sm-tree-icon {
    display: inline-block;
    width: 16px;
    text-align: center;
  }
  .sm-tree-value {
    line-height: 2;
  }
  .sm-tree-children {
    border-left: 2px solid $neutral-color;
    margin-left: 7px;
    padding-left: 7px;
  }
}
</style>
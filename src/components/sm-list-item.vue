<template>
  <div :class="'list-item ' + (title ? 'list-item-title' : '')">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    title: Boolean,
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/const.scss";

.list-item {
  padding: 8px 16px;
  border-bottom: $list-color 1px solid;
}
.list-item-title {
  background-color: $list-color;
}
</style>
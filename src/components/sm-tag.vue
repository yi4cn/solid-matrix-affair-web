<template>
  <span class="tag"><slot></slot></span>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "@/assets/const.scss";
.tag {
  background-color: $tag-bg-color;
  color: $tag-color;
  padding: 2px 12px;
  border-radius: 12px;
}
</style>
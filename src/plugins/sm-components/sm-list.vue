<template>
  <div class="list"><slot></slot></div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "@/assets/const.scss";
.list {
  border: $list-color 2px solid;
}
</style>
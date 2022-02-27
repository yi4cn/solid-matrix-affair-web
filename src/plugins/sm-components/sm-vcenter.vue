<template>
  <div class="vcenter">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.vcenter {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
}
</style>
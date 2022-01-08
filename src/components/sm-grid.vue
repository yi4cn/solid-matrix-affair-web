<template>
  <div>
    <div class="sm-grid"><slot></slot></div>
  </div>
</template>

<script>
export default {};
</script>


<style lang="scss" scoped>
.sm-grid {
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
  display: flex;
  position: relative;
}
</style>

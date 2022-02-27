<template>
  <div class="sm-row"><slot></slot></div>
</template>

<script>
export default {};
</script>


<style lang="scss" scoped>
.sm-row {
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
  display: flex;
}
</style>

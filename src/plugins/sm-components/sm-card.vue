<template>
  <div>
    <div class="card">
      <slot></slot>
      <div class="top">
        <slot name="top"></slot>
      </div>
      <div class="center">
        <slot name="center"></slot>
      </div>
      <div class="bottom">
        <slot name="bottom"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  margin: 0 auto;
  position: relative;
  min-height: 120px;
  .top {
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    width: 100%;
  }
  .center {
    position: absolute;
    top: 0;
    left: 0;
    margin: 50% 0;
    text-align: center;
    width: 100%;
  }
  .bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    text-align: center;
    width: 100%;
  }
}
</style>
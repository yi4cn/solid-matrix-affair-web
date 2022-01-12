<template>
  <div class="loading">
    <sm-loading-icon class="loading-icon" />
  </div>
</template>

<script>
import smLoadingIcon from "./sm-loading-icon.vue";
export default {
  components: { smLoadingIcon },
};
</script>

<style lang="scss" scoped>
@import "@/assets/const.scss";
.loading {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $primary-color;
  .loading-icon {
    position: relative;
    color: white;
    width: 64px;
    height: 64px;
    top: -32px;
    margin: 50vh auto;
  }
}
</style>
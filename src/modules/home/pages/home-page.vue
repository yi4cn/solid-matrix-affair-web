<template>
  <div class="full">
    <div class="panels">
      <div class="panel"></div>
      <div class="panel"></div>
      <div class="panel"></div>
      <div class="panel"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/const.scss";

.full {
  height: 0;
  width: 0;
  background-color: $primary-color;
  position: relative;
  padding: 50vh 50vw;
}
.panels {
  width: 100px;
  height: 100px;
  background-color: white;
  margin: -50px 0 0 -50px;
  // min-height: 800px;
  // max-width: 400px;
  // position: relative;
  // .panel {
  //   width: 120px;
  //   height: 120px;
  //   margin: 20px;
  //   float: left;
  //   background-color: white;
  // }
}
</style>;

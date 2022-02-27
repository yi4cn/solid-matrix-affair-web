<template>
  <label class="sm-input-label"><slot></slot></label>
</template>
<script>
export default {};
</script>
<style lang="scss">
@import "@/assets/const.scss";
.sm-input-label {
  -webkit-appearance: none;
  outline: none;
  display: inline-block;
  box-sizing: content-box;
  width: auto;
  padding: 8px;
  margin: 0;
  border: 1px $primary-color solid;
  line-height: 1em;
  font-size: 1em;
  background-color: $primary-color;
  color: $auxiliary-color;
  cursor: pointer;
}
</style>
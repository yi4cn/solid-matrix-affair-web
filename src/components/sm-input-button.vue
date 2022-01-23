<template>
  <button class="sm-input-button">
    <sm-icon v-if="icon" :icon="icon" />
    <slot></slot>
    <span v-if="text">{{ text }}</span>
  </button>
</template>
><script>
export default {
  props: {
    icon: String,
    text: String,
  },
};
</script>
<style lang="scss">
@import "@/assets/const.scss";
.sm-input-button {
  -webkit-appearance: none;
  outline: none;
  display: inline-block;
  box-sizing: content-box;
  width: auto;
  padding: 8px;
  margin: 0;
  border: 0px $primary-color solid;
  line-height: 1em;
  font-size: 1em;
  background-color: $primary-color;
  color: $auxiliary-color;
  cursor: pointer;
}
</style>
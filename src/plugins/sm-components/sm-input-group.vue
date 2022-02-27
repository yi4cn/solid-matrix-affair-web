<template>
  <div
    :class="
      'sm-input-group ' +
      (direction == 'right' ? 'sm-input-group-right' : 'sm-input-group-left')
    "
  >
    <slot> </slot>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  direction: String,
});
</script>

<style lang="scss">
.sm-input-group {
  display: flex;
  flex-direction: row;
  .sm-input-text {
    flex-grow: 1;
    min-width: 0;
  }
}

.sm-input-group-left {
  justify-content: flex-start;
}

.sm-input-group-right {
  justify-content: flex-end;
}

.sm-input-group :not(:first-child) {
  border-left: none;
}
</style>
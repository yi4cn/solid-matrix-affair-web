<template>
  <transition name="fade">
    <div v-if="show" :class="'sm-alert sm-alert-' + (type || 'info')">
      <slot />
    </div>
  </transition>
</template>
<script setup>
import { ref, defineProps } from "vue";
defineProps({ type: String });
const show = ref(true);
setTimeout(() => (show.value = false), 2000);
</script>
<style lang="scss" scoped>
@import "@/assets/const.scss";

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}

.sm-alert {
  width: $size-2 * 10;
  background-color: $primary-color;
  margin: $size-1;
  padding: $size-1 $size-3;
  text-align: center;
  font-size: $sm-font-size;
  line-height: $size-3;
}
.sm-alert-success {
  background-color: $success-color;
}
.sm-alert-warning {
  background-color: $warning-color;
}
.sm-alert-error {
  background-color: $error-color;
}
.sm-alert-info {
  background-color: $neutral-color;
}
</style>
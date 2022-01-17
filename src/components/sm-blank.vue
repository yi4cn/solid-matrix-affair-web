<template>
  <div :class="'sm-blank-' + size" />
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  size: String,
});
</script>
<style lang="scss" scoped>
@import "@/assets/const.scss";

.sm-blank-xs {
  height: $blank-xs-size;
}
.sm-blank-sm {
  height: $blank-sm-size;
}
.sm-blank-md {
  height: $blank-md-size;
}
.sm-blank-lg {
  height: $blank-lg-size;
}
.sm-blank-xl {
  height: $blank-xl-size;
}
</style>
<template>
  <input type="hidden" class="sm-input-hidden" v-model="value" />
</template>
<script setup>
import { ref, defineProps, defineExpose } from "vue";
const props = defineProps({
  defaultValue: String,
});

const value = ref(props.defaultValue);

defineExpose({
  value,
});
</script>
<style lang="scss">
.sm-input-hidden {
  display: none;
}
</style>
<template>
  <div id="sm-alert-container">
    <sm-alert v-for="(alert, i) in alerts" :key="i" :type="alert.type">
      {{ alert.text }}
    </sm-alert>
  </div>
  <slot />
</template>
<script setup>
import { provide, ref } from "vue";

const alerts = ref([]);

provide("alert", {
  success: (text) => alerts.value.push({ type: "success", text }),
  warning: (text) => alerts.value.push({ type: "warning", text }),
  error: (text) => alerts.value.push({ type: "error", text }),
  info: (text) => alerts.value.push({ type: "info", text }),
});
</script>

<style lang="scss" scoped>
#sm-alert-container {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100000000;
}
</style>
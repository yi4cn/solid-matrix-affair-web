<template>
  <h1>Test Page</h1>
  <sm-input-button @click="alert.success('success' + Date.now())"
    >Success</sm-input-button
  >
  <sm-blank size="sm" />
  <sm-input-button @click="alert.warning('warning' + Date.now())"
    >Warning</sm-input-button
  >
  <sm-blank size="sm" />
  <sm-input-button @click="alert.error('error' + Date.now())"
    >Error</sm-input-button
  >
  <sm-blank size="sm" />
  <sm-input-button @click="alert.info('info' + Date.now())"
    >Info</sm-input-button
  >
</template>
<script setup>
import { inject } from "vue";
const alert = inject("sm-alert");
</script>
<style lang="scss" scoped></style>
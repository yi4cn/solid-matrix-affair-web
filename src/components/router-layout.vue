<template>
  <loading-wrapper>
    <sm-alert-container>
      <router-view />
    </sm-alert-container>
  </loading-wrapper>
</template>

<script setup>
import LoadingWrapper from "./loading-wrapper.vue";
</script>
<template>
  <sm-alert-container>
    <sm-wxauth>
      <router-view />
    </sm-wxauth>
  </sm-alert-container>
</template>

<script setup>
import SmAlertContainer from "./sm-alert-container.vue";
import SmWxauth from "./sm-wxauth.vue";
</script>
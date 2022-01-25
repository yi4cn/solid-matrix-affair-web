<template>
  <sm-wxauth>
    <sm-alert-container>
      <router-view />
    </sm-alert-container>
  </sm-wxauth>
</template>

<script setup>
import SmAlertContainer from "./sm-alert-container.vue";
import SmWxauth from "./sm-wxauth.vue";
</script>
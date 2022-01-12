<template>
  <sm-wxauth>
    <router-view />
  </sm-wxauth>
</template>

<script>
import smWxauth from "./sm-wxauth.vue";
export default {
  components: { smWxauth },
};
</script>

<style lang="scss">
</style>
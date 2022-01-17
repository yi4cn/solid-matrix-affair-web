<template>
  <div class="panel-card">
    <router-link :to="{ name: route }">
      <div class="icon">
        <sm-icon :icon="icon" />
      </div>
      <div class="name">
        {{ name }}
      </div>
    </router-link>
  </div>
</template>
<script setup>
import { defineProps } from "vue";

defineProps({
  icon: String,
  name: String,
  route: String,
});
</script>

<style lang="scss" scoped>
@import "@/assets/const.scss";

.panel-card {
  background-color: $primary-color;
  color: $auxiliary-color;
  padding: 8px;
  .icon {
    line-height: calc(2 * $xl-font-size);
    font-size: $xl-font-size;
    text-align: center;
  }
  .name {
    line-height: calc(2 * $sm-font-size);
    font-size: $sm-font-size;
    text-align: center;
  }
}
</style>
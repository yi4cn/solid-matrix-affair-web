<template>
  <sm-loading-page v-if="loading" />
  <slot></slot>
</template>
<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
const store = useStore();
const loading = computed(() => store.getters.isLoading);
</script>
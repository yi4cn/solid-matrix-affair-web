<template>
  <slot></slot>
</template>

<script setup>
import { defineProps, computed, inject } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { Pass } from "@/utils/role-authorize";

const router = useRouter();
const store = useStore();
const alert = inject("sm-alert");

const props = defineProps({
  roles: Array,
});

const requireRoles = props.roles || [];
const userRoles = computed(() => store.getters.userRoles);

if (!Pass(userRoles, requireRoles)) {
  alert.error("权限不够");
  router.back();
}
</script>
<template>
  <require-auth>
    <div class="layout">
      <header>
        <nav>
          <div
            class="dashboard-btn"
            @click="$router.push({ name: 'dashboard' })"
          >
            <sm-icon icon="dashboard" />
          </div>
          <div class="title">{{ title }}</div>
        </nav>
      </header>
      <main>
        <slot></slot>
      </main>
      <footer>
        <sm-footer />
        <slot name="afterFooter" />
      </footer>
    </div>
  </require-auth>
</template>

<script setup>
import RequireAuth from "@/components/require-auth.vue";
import { defineProps } from "vue";
defineProps({
  title: String,
});
</script>

<style lang="scss" scoped>
@import "@/assets/const.scss";
.layout {
  min-height: 100vh;
  background-color: $layout-bg-color;
  color: $layout-color;
}
header {
  height: $header-height;
  color: $auxiliary-color;
}
nav {
  display: flex;
  flex-direction: row;
  height: $navbar-height;
  line-height: $navbar-height;
  font-size: $lg-font-size;
  padding: 0 32px;
  .dashboard-btn {
    flex-grow: 0;
    height: $navbar-height;
    width: $navbar-height;
    font-size: $lg-font-size;
    text-align: center;
    cursor: pointer;
  }
  .title {
    flex-grow: 1;
    text-align: left;
  }
}
main {
  background-color: $main-bg-color;
  color: $main-color;
  box-shadow: 0 0 16px black;
  border-left: 3px solid $primary-color;
  border-right: 3px solid $primary-color;
  padding: 0;
}
footer {
  padding: $size-2 $size-1;
  line-height: $sm-font-size * 2;
  font-size: $sm-font-size;
  text-align: center;
}
</style>
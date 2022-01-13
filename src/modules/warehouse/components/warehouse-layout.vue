<template>
  <sm-loading-page v-if="!ready" />
  <div class="layout" v-if="ready">
    <header>
      <nav>
        <button
          class="dashboard-btn"
          @click="$router.push({ name: 'warehouse-dashboard' })"
        >
          <sm-icon icon="dashboard" />
        </button>
        <div class="title">{{ title }}</div>
      </nav>
    </header>
    <main>
      <slot></slot>
    </main>

    <footer>
      <sm-footer />
    </footer>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";

export default {
  props: {
    title: String,
  },
  setup() {
    const store = useStore();
    const ready = computed(() => store.getters["warehouse/getReady"]());
    setTimeout(() => store.commit("warehouse/stopLoad"), 500);
    return {
      ready,
    };
  },
};
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
  height: $footer-height;
  line-height: $footer-height;
  text-align: center;
  font-size: $sm-font-size;
  padding: 0 32px;
}
</style>
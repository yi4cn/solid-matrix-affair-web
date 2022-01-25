<template>
  <sm-loading-page v-if="!ready" />
  <div v-else class="layout">
    <!-- Header -->
    <header>
      <div class="caption">
        <slot name="caption"></slot>
      </div>
    </header>
    <!-- Main -->
    <main>
      <slot></slot>
    </main>
    <!-- Footer -->
    <footer>
      <slot name="footer" class="copyright">
        <sm-footer />
      </slot>
    </footer>
    <!-- Nav -->
    <nav>
      <div class="placeholder"></div>
      <div class="fixed">
        <div class="navbar">
          <sm-input-group>
            <sm-input-button icon="back" @click="$router.back()" />
            <sm-input-button
              icon="catalogs"
              @click="$router.push({ name: 'catalogs' })"
            />
            <sm-input-text search @keyup.enter="onSearch" ref="searchInput" />
            <sm-input-button icon="search" @click="onSearch" />
          </sm-input-group>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    store.dispatch("catalogs/loadMeta");

    const ready = computed(() => store.getters["catalogs/getReady"]());

    return { ready };
  },
  methods: {
    onSearch() {
      const search = this.$refs.searchInput.value.trim();
      if (search && search.length > 0)
        this.$router.push({ name: "catalogs-search", params: { search } });
    },
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
  min-height: $header-height;
  .caption {
    padding: 16px 0;
    font-size: $sm-font-size;
    line-height: $md-font-size;
    text-align: center;
    white-space: pre-line;
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

nav {
  .placeholder {
    height: $navbar-height;
  }
  .fixed {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    padding: $size-2;
    .navbar {
      border-radius: 8px;
      font-size: $xl-font-size;
      box-shadow: 0 0 8px black;
      max-width: 480px;
      * {
        background-color: $auxiliary-color;
        color: $primary-color;
      }
    }
  }
}
</style>

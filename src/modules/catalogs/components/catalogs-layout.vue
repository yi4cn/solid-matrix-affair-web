<template>
  <div v-if="!ready" class="loading">
    <sm-loading-icon class="loading-icon" />
  </div>
  <div v-if="ready" class="layout">
    <!-- Header -->
    <header class="header">
      <div class="caption">
        <slot name="caption"></slot>
      </div>
    </header>
    <!-- Main -->
    <main class="main">
      <slot></slot>
    </main>
    <!-- Footer -->
    <footer class="footer">
      <slot name="footer" class="copyright">
        <sm-footer />
      </slot>
    </footer>
    <!-- Nav -->
    <nav class="nav">
      <div class="placeholder"></div>
      <div class="fixed">
        <div class="navbarbox">
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

      console.log("search ", search);
      if (search && search.length > 0)
        this.$router.push({ name: "catalogs-search", params: { search } });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/const.scss";
.loading {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $primary-color;
  .loading-icon {
    position: relative;
    color: white;
    width: 64px;
    height: 64px;
    top: -32px;
    margin: 50vh auto;
  }
}
.layout {
  min-height: 100vh;
  background-color: $layout-bg-color;
  color: $layout-color;

  .header {
    min-height: $header-height;
    .caption {
      padding: 16px 0;
      font-size: $sm-font-size;
      line-height: $md-font-size;
      text-align: center;
      white-space: pre-line;
    }
  }

  .main {
    background-color: $main-bg-color;
    color: $main-color;
    box-shadow: 0 0 16px black;
    border-left: 3px solid $primary-color;
    border-right: 3px solid $primary-color;
    padding: 0;
  }

  .footer {
    height: $footer-height;
    line-height: $footer-height;
    font-size: $footer-font-size;
    text-align: center;
  }

  .nav {
    .placeholder {
      height: $navbar-height;
    }
    .fixed {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      .navbarbox {
        .navbar {
          margin: 8px auto;
          position: relative;
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
  }
}
</style>

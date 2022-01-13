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
            <button class="btn" @click="$router.back()">
              <sm-icon icon="back" />
            </button>
            <button class="btn" @click="$router.push({ name: 'catalogs' })">
              <sm-icon icon="catalogs" />
            </button>
            <div class="search">
              <input
                class="search-text"
                @keyup.enter="onSearch"
                ref="searchInput"
                type="search"
              />
            </div>
            <button class="btn" @click="onSearch">
              <sm-icon icon="search" />
            </button>
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
      const search = this.$refs.searchInput.value;
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
    .copyright {
      text-align: center;
    }
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
        margin: 8px;
        position: relative;
        .navbar {
          margin: 0 auto;
          border-radius: 8px;
          padding: 0 8px;
          display: flex;
          flex-direction: row;
          height: $navbar-height;
          background-color: $navbar-bg-color;
          box-shadow: 0 0 8px black;
          max-width: 400px;
          .btn {
            height: $navbar-height;
            width: calc($navbar-height - 16px);
            line-height: $navbar-height;
            color: $primary-color;
            font-size: calc($navbar-height/2);
            text-align: center;
          }
          .search {
            flex-grow: 1;
            height: calc($navbar-height - 16px);
            line-height: calc($navbar-height - 16px);
            width: $navbar-height;
            color: $primary-color;
            font-size: $lg-font-size;
            text-align: right;
            padding: 8px 0;

            display: flex;
            .search-text {
              flex-basis: auto;
              width: 100%;
              border: 1px $primary-color solid;
              border-radius: 8px;
              padding: 4px 8px;
            }
          }
        }
      }
    }
  }
}
</style>

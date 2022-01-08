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
      <slot name="footer">
        <div class="copyright">Powered By <b>SolidMatrix.Affair</b> Engine</div>
      </slot>
    </footer>
    <!-- Nav -->
    <nav class="nav">
      <div class="placeholder"></div>
      <div class="fixed">
        <div class="navbarbox">
          <div class="navbar">
            <button class="btn btn-back" @click="$router.back()">
              <svg viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"
                />
              </svg>
            </button>
            <button
              class="btn btn-home"
              @click="$router.push({ name: 'index' })"
            >
              <svg viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22L12 3Z"
                />
              </svg>
            </button>

            <button
              class="btn btn-catalogs"
              @click="$router.push({ name: 'catalogs' })"
            >
              <svg viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M13.96,12.29L11.21,15.83L9.25,13.47L6.5,17H17.5L13.96,12.29Z"
                />
              </svg>
            </button>

            <div class="search">
              <input
                class="search-text"
                @keyup.enter="onSearch"
                ref="searchInput"
                type="search"
              />
            </div>
            <button class="btn search-btn" @click="onSearch">
              <svg viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
                />
              </svg>
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
import SmLoadingIcon from "@/components/sm-loading-icon.vue";

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
  components: { SmLoadingIcon },
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
    min-height: $header-min-height;
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
          line-height: $navbar-height;
          .btn {
            flex-grow: 0;
            height: $navbar-height;
            width: calc($navbar-height - 16px);
            line-height: $navbar-height;
            color: $primary-color;
            font-size: calc($navbar-height/2);
            text-align: center;
            cursor: pointer;
            svg {
              margin: calc($navbar-height/4) auto;
              width: calc($navbar-height/2);
              height: calc($navbar-height/2);
            }
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

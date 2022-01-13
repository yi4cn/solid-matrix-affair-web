<template>
  <sm-title :title="title" />
  <catalogs-layout>
    <template v-slot:caption>
      <div class="caption">
        <div>Search 搜索</div>
        <div>{{ search }}</div>
      </div>
    </template>
    <div class="not-found" v-if="designs.length === 0">
      <div>Not Found</div>
      <div>未找到</div>
    </div>

    <sm-grid class="my-grid" v-if="designs.length > 0">
      <sm-row>
        <sm-col
          v-for="design in designs"
          v-bind:key="design.id"
          xs="6"
          sm="4"
          md="3"
          lg="2"
          xl="2"
        >
          <div class="gap">
            <router-link
              :to="{ name: 'catalogs-design', params: { designId: design.id } }"
            >
              <design-card :design="design" />
            </router-link>
          </div>
        </sm-col>
      </sm-row>
    </sm-grid>
  </catalogs-layout>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

import CatalogsLayout from "../components/catalogs-layout.vue";
import DesignCard from "../components/design-card.vue";

export default {
  props: {
    search: String,
  },
  setup(props) {
    const store = useStore();
    const ready = computed(() => store.getters["catalogs/getReady"]());

    const designs = computed(() =>
      ready.value
        ? store.getters["catalogs/searchDesigns"](props.search).slice(0, 50)
        : null
    );
    const title = computed(() =>
      ready.value ? "Search " + props.search : null
    );
    return { designs, title };
  },
  components: { CatalogsLayout, DesignCard },
};
</script>

<style lang="scss" scoped>
@import "@/assets/const.scss";
.my-grid {
  padding: 8px;
}
.gap {
  margin: 8px;
}
.caption {
  font-size: $md-font-size;
  line-height: $lg-font-size;
}
.not-found {
  padding: 64px 0;
  text-align: center;
  font-size: $xl-font-size;
}
</style>

<template>
  <sm-title :title="title" />
  <catalogs-layout>
    <template v-slot:caption>
      <div>{{ catalog.caption }}</div>
    </template>

    <sm-grid class="my-grid" gap="8px">
      <sm-row gap="8px">
        <sm-col
          v-for="design in catalog.designs"
          v-bind:key="design.id"
          xs="6"
          sm="4"
          md="3"
          lg="2"
          xl="2"
        >
          <div class="box">
            <div class="inbox">
              <router-link
                :to="{
                  name: 'catalogs-design',
                  params: { designId: design.id },
                }"
              >
                <design-card :design="design" />
              </router-link>
            </div>
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
    catalogId: String,
  },
  setup(props) {
    const store = useStore();
    const ready = computed(() => store.getters["catalogs/getReady"]());

    const catalog = computed(() =>
      ready.value ? store.getters["catalogs/getCatalog"](props.catalogId) : null
    );
    const title = computed(() =>
      ready.value ? catalog.value.title || "Catalog" : null
    );
    return { catalog, title };
  },

  components: { CatalogsLayout, DesignCard },
};
</script>

<style lang="scss" scoped>
.my-grid {
  padding: 8px;
}
.box {
  padding: 8px;
}
</style>

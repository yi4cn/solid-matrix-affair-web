<template>
  <sm-title :title="title" />
  <catalogs-layout>
    <template v-slot:caption>
      <div>
        <h1>
          {{ homeMeta.title }} <small>{{ homeMeta.subTitle }}</small>
        </h1>
        <div>{{ homeMeta.caption }}</div>
      </div>
    </template>

    <sm-grid class="my-grid">
      <sm-row>
        <sm-col
          v-for="catalog in catalogs"
          v-bind:key="catalog.id"
          xs="6"
          sm="4"
          md="3"
          lg="2"
          xl="2"
        >
          <div class="gap">
            <router-link
              :to="{
                name: 'catalogs-catalog',
                params: { catalogId: catalog.id },
              }"
            >
              <catalog-card :catalog="catalog" />
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
import SmGrid from "@/components/sm-grid.vue";
import SmRow from "@/components/sm-row.vue";
import SmCol from "@/components/sm-col.vue";
import CatalogsLayout from "../components/catalogs-layout.vue";
import CatalogCard from "../components/catalog-card.vue";
import SmTitle from "@/components/sm-title.vue";

export default {
  setup() {
    const store = useStore();

    const catalogs = computed(() => store.getters["catalogs/getCatalogs"]());
    const homeMeta = computed(() => store.getters["catalogs/getHomeMeta"]());
    const title = computed(() => homeMeta.value.title || "Catalogs");
    return { catalogs, title, homeMeta };
  },
  components: { SmGrid, SmRow, SmCol, SmTitle, CatalogsLayout, CatalogCard },
};
</script>

<style lang="scss" scoped>
.my-grid {
  padding: 8px;
}
.gap {
  margin: 8px;
}
</style>;

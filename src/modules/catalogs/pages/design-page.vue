<template>
  <sm-title :title="title" />
  <catalogs-layout>
    <template v-slot:caption>
      <div>{{ catalog.caption }}</div>
    </template>

    <design-sheet class="sheet" :design="design" />
  </catalogs-layout>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

import DesignSheet from "../components/design-sheet.vue";
import catalogsLayout from "../components/catalogs-layout.vue";

export default {
  props: {
    designId: String,
  },
  setup(props) {
    const store = useStore();
    const ready = computed(() => store.getters["catalogs/getReady"]());

    const design = computed(() =>
      ready.value ? store.getters["catalogs/getDesign"](props.designId) : null
    );
    const catalog = computed(() =>
      ready.value
        ? store.getters["catalogs/getCatalog"](design.value.catalogId)
        : null
    );
    const title = computed(() =>
      ready.value ? design.value.name || "Catalog" : null
    );

    return { catalog, design, title };
  },
  components: { catalogsLayout, DesignSheet },
};
</script>


<style lang="scss" scoped>
.sheet {
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
}
</style>

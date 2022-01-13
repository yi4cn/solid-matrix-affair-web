<template>
  <sm-title title="Dashboard" />
  <warehouse-layout title="Dashboard">
    <div class="panel">
      <sm-grid>
        <sm-row>
          <sm-col
            v-for="func in funcs"
            :key="func.name"
            xs="4"
            sm="3"
            md="2"
            lg="1"
          >
            <panel-card
              class="func"
              :icon="func.icon"
              :name="func.name"
              :route="func.route"
            />
          </sm-col>
        </sm-row>
      </sm-grid>
    </div>
  </warehouse-layout>
</template>

<script>
import PanelCard from "../components/panel-card.vue";
import WarehouseLayout from "../components/warehouse-layout.vue";
const funcs = [
  { icon: "import", name: "In Stock", route: "warehouse-in-stock" },
  { icon: "export", name: "Out Stock", route: "warehouse-out-stock" },
  { icon: "query", name: "Query Stock", route: "warehouse-query-stock" },
  { icon: "category", name: "Category", route: "warehouse-category" },
  { icon: "catalogs", name: "Catalogs", route: "catalogs" },
];

export default {
  components: { WarehouseLayout, PanelCard },
  setup() {
    return { funcs };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/const.scss";
.panel {
  padding: 8px;
  .func {
    margin: 8px;
  }
}
</style>;

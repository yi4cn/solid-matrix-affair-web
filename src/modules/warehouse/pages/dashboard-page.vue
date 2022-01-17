<template>
  <sm-title :title="title" />
  <warehouse-layout :title="title">
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
  { icon: "import", name: "快速入仓", route: "warehouse-in-stock" },
  { icon: "export", name: "快速出仓", route: "warehouse-out-stock" },
  {
    icon: "query-location",
    name: "仓位查询",
    route: "warehouse-query-location",
  },
  { icon: "query-pattern", name: "花型查询", route: "warehouse-query-pattern" },
  { icon: "query-item", name: "商品查询", route: "warehouse-query-item" },
  { icon: "category", name: "品类管理", route: "warehouse-category" },
  { icon: "catalogs", name: "花型相册", route: "catalogs" },
];

export default {
  components: { WarehouseLayout, PanelCard },
  setup() {
    const title = "控制面板";
    return { funcs, title };
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

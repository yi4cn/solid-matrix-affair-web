<template>
  <sm-title title="商品查询" />
  <warehouse-layout title="商品查询">
    <div class="wrapper">
      <sm-input-group>
        <sm-input-label>花型号</sm-input-label>
        <sm-input-text search ref="patternSearch" @keyup.enter="search" />
        <sm-input-button @click="search">查询</sm-input-button>
      </sm-input-group>
      <sm-blank size="xs" />
      <div class="result-tree">
        <sm-tree
          v-for="name in Object.keys(structItems.names)"
          :key="name"
          :value="
            name +
            '==' +
            structItems.names[name].count +
            '匹==' +
            structItems.names[name].total +
            '米'
          "
        >
          <sm-tree
            v-for="location in Object.keys(structItems.names[name].locations)"
            :key="location"
            :value="
              location +
              '==' +
              structItems.names[name].locations[location].count +
              '匹==' +
              structItems.names[name].locations[location].total +
              '米'
            "
          >
            <sm-tree
              v-for="item in structItems.names[name].locations[location].items"
              :key="item.id"
              :value="item.code + '==' + item.quantity + '米'"
            >
            </sm-tree>
          </sm-tree>
        </sm-tree>
      </div>
    </div>
  </warehouse-layout>
</template>

<script setup>
import WarehouseLayout from "../components/warehouse-layout.vue";
import { useStore } from "vuex";
import { computed, ref } from "vue";
const store = useStore();

const patternSearch = ref();

const items = computed(() => {
  console.log("item update");
  return store.state.warehouse.items;
});

const structItems = computed(() => {
  const res = {
    total: 0,
    count: 0,
    names: {},
  };
  for (let i = 0; i < items.value.length; i++) {
    const {
      category: { initial },
      pattern,
      color,
      location,
    } = items.value[i];
    const name = initial + pattern + "-" + color;

    res.names[name] ||= {
      total: 0,
      count: 0,
      locations: {},
    };

    res.names[name].locations[location] ||= {
      total: 0,
      count: 0,
      items: [],
    };
    const { id, code, quantity } = items.value[i];
    res.names[name].locations[location].items.push({ id, code, quantity });

    res.total += quantity;
    res.count++;
    res.names[name].total += quantity;
    res.names[name].count++;
    res.names[name].locations[location].total += quantity;
    res.names[name].locations[location].count++;
  }
  return res;
});

structItems;

const search = () => {
  const search = patternSearch.value.value;
  store.dispatch("warehouse/queryByPattern", search);
};

// import { computed } from "vue";

// const items = computed(() => []);

// const itemDict = computed(() => {
//   const res = {};
//   for (let i = 0; i < items.length; i++) {
//     const name = items.name
//   }
// });
</script>

<style lang="scss" scoped>
@import "@/assets/const.scss";
.wrapper {
  padding: 16px;
}
.result-tree {
  font-size: $sm-font-size;
}
</style>;

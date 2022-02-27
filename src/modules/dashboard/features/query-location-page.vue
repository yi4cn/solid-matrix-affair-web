<template>
  <sm-title title="仓位查询" />
  <panel-layout title="仓位查询">
    <div class="wrapper">
      <sm-input-group>
        <sm-input-label>仓位</sm-input-label>
        <sm-input-text search ref="locationSearch" @keyup.enter="search" />
        <sm-input-button @click="search">查询</sm-input-button>
      </sm-input-group>
      <sm-blank size="xs" />
      <div class="result-meta" v-if="searchContent">
        <span>查询: {{ searchContent }}</span>
        <span>总匹数：{{ structItems.count }}</span>
        <span>总米数：{{ structItems.total }}</span>
      </div>
      <sm-blank size="xs" />
      <div class="result-tree">
        <sm-tree
          v-for="location in Object.keys(structItems.locations)"
          :key="location"
          :value="
            location +
            '==' +
            structItems.locations[location].count +
            '匹==' +
            structItems.locations[location].total +
            '米'
          "
        >
          <sm-tree
            v-for="name in Object.keys(structItems.locations[location].names)"
            :key="name"
            :value="
              name +
              '==' +
              structItems.locations[location].names[name].count +
              '匹==' +
              structItems.locations[location].names[name].total +
              '米'
            "
          >
            <sm-tree
              v-for="item in structItems.locations[location].names[name].items"
              :key="item.id"
              :value="item.code + '==' + item.quantity + '米'"
            >
            </sm-tree>
          </sm-tree>
        </sm-tree>
      </div>
    </div>
  </panel-layout>
</template>

<script setup>
import PanelLayout from "../components/panel-layout.vue";

import { useStore } from "vuex";
import { computed, ref, onMounted } from "vue";

const store = useStore();

const locationSearch = ref();
const searchContent = ref("");

onMounted(() => {
  store.dispatch("warehouse/clearItems");
});

const search = () => {
  const search = locationSearch.value.value;
  if (search && search.trim().length > 0) {
    searchContent.value = search;
    store.dispatch("warehouse/queryByLocation", search);
  }
};

const items = computed(() => {
  return store.state.warehouse.items;
});

const structItems = computed(() => {
  const res = {
    total: 0,
    count: 0,
    locations: {},
  };
  for (let i = 0; i < items.value.length; i++) {
    const {
      category: { initial },
      pattern,
      color,
      location,
    } = items.value[i];
    const name = initial + pattern + "-" + color;

    res.locations[location] ||= {
      total: 0,
      count: 0,
      names: {},
    };

    res.locations[location].names[name] ||= {
      total: 0,
      count: 0,
      items: [],
    };
    const { id, code, quantity } = items.value[i];
    res.locations[location].names[name].items.push({ id, code, quantity });

    res.total += quantity;
    res.count++;
    res.locations[location].total += quantity;
    res.locations[location].count++;
    res.locations[location].names[name].total += quantity;
    res.locations[location].names[name].count++;
  }
  return res;
});
structItems;
</script>

<style lang="scss" scoped>
@import "@/assets/const.scss";
.wrapper {
  padding: 16px;
}
.result-meta {
  font-size: $sm-font-size;
  font-weight: bold;
  span {
    padding: 0 8px;
  }
}
.result-tree {
  font-size: $sm-font-size;
}
</style>;

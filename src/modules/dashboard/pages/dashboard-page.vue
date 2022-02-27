<template>
  <sm-title title="控制面板" />
  <panel-layout title="控制面板">
    <div class="panel">
      <sm-grid>
        <sm-row>
          <sm-col
            v-for="feature in userFeatures"
            :key="feature.name"
            xs="4"
            sm="3"
            md="2"
            lg="1"
          >
            <panel-card
              class="feature"
              :icon="feature.icon"
              :name="feature.name"
              :caption="feature.caption"
            />
          </sm-col>
        </sm-row>
      </sm-grid>
    </div>
  </panel-layout>
</template>
<script setup>
import PanelLayout from "../components/panel-layout.vue";
import PanelCard from "../components/panel-card.vue";

import { useStore } from "vuex";
import { computed } from "vue";
import { Pass } from "@/utils/role-authorize";

import features from "../features.js";

const store = useStore();

const userRoles = computed(() => store.getters.userRoles);

function canAccess(requireRoles) {
  return Pass(userRoles.value, requireRoles);
}

const userFeatures = features.filter((feature) =>
  canAccess(feature.requireRoles)
);
</script>

<style lang="scss" scoped>
@import "@/assets/const.scss";
.panel {
  padding: 8px;
  .feature {
    margin: 8px;
  }
}
</style>
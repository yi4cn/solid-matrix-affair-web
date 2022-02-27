<template>
  <div class="modal" v-if="visible" @click="hide">
    <sm-vcenter>
      <div class="panel" @click.stop.prevent>
        <div class="title">
          <span class="close" @click="hide"><sm-icon icon="close" /></span>
          <span>{{ title }}</span>
        </div>
        <div class="content">
          <slot></slot>
        </div>
      </div>
    </sm-vcenter>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

defineProps({
  visible: Boolean,
  title: String,
});

const emit = defineEmits(["onHide"]);
const hide = () => emit("onHide");
</script>

<style lang="scss" scoped>
@import "@/assets/const.scss";

.modal {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: rgba($color: #000, $alpha: 0.5);
  .panel {
    width: 80vw;
    margin: 0 auto;
    background-color: $auxiliary-color;
    border: $primary-color 1px solid;
    box-shadow: 0 0 8px black;
    .title {
      padding: 8px 16px;
      border-bottom: $primary-color 1px solid;
      background-color: $primary-color;
      color: $auxiliary-color;
      font-size: $md-font-size;
      * {
        padding: 0 8px;
      }
      .close {
        cursor: pointer;
        font-size: 1.03em;
      }
    }

    .content {
      padding: 8px 16px;
    }
  }
}
</style>
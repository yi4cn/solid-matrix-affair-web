<template>
  <div class="none"></div>
</template>

<script>
import { onMounted, onUpdated, toRefs } from "@vue/runtime-core";
export default {
  props: {
    title: String,
  },
  setup(props) {
    const { title } = toRefs(props);
    onMounted(() => {
      document.title = title.value || "";
    });
    onUpdated(() => {
      document.title = title.value || "";
    });
  },
};
</script>

<style lang="scss" scoped>
.none {
  width: 0;
  height: 0;
  display: none;
}
</style>

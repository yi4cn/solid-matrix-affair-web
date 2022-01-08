<template>
  <sm-card>
    <div class="name">{{ design.name }}</div>
    <sm-img class="design-image" :src="design.url.medium" />
    <div class="name">{{ design.name }}</div>
  </sm-card>
</template>

<script>
import smCard from "@/components/sm-card.vue";
import SmImg from "@/components/sm-img.vue";
export default {
  props: {
    design: Object,
  },
  components: { smCard, SmImg },
};
</script>

<style lang="scss" scoped>
@import "@/assets/const.scss";

.design-image {
  padding: 0 32px;
}
.name {
  line-height: 64px;
  color: $primary-color;
  font-size: $lg-font-size;
  background-color: white;
  text-align: center;
}
</style>
<template>
  <sm-card>
    <div class="name">{{ design.name }}</div>
    <sm-img class="design-image" :src="design.url.medium" />
    <div class="name">{{ design.name }}</div>
  </sm-card>
</template>

<script>
export default {
  props: {
    design: Object,
  },
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
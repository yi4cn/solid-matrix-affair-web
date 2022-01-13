<template>
  <sm-card>
    <div class="cover">
      <sm-img :src="design.url.thumbnail" />
    </div>
    <template v-slot:bottom>
      <div class="name">{{ design.name }}</div>
    </template>
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
.name {
  line-height: 32px;
  color: #eee;
  font-size: $md-font-size;
  background-color: rgba($color: $primary-color, $alpha: 0.8);
}
.cover {
  img {
    width: 100%;
  }
}
</style>
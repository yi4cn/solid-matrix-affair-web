<template>
  <sm-card>
    <div class="cover">
      <sm-img src="/catalog-cover.jpg" />
    </div>

    <template v-slot:center>
      <div class="name">{{ catalog.title }}</div>
    </template>

    <template v-slot:bottom>
      <div class="subtitle">{{ catalog.subTitle }}</div>
    </template>
  </sm-card>
</template>

<script>
export default {
  props: {
    catalog: Object,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/const.scss";
.cover {
  img {
    width: 100%;
  }
}
.name {
  color: white;
  font-size: $lg-font-size;
}
.subtitle {
  line-height: calc($sm-font-size + 8px);
  color: #eee;
  font-size: $sm-font-size;
  padding: 8px;
}
</style>
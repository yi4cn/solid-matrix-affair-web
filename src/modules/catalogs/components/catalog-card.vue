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
import smCard from "@/components/sm-card.vue";
import SmImg from "@/components/sm-img.vue";
export default {
  props: {
    catalog: Object,
  },
  components: { smCard, SmImg },
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
  padding: 0 8px;
  background-color: rgba($color: $primary-color, $alpha: 0.8);
}
</style>
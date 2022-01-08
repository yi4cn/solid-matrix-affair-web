<template>
  <div>
    <img :src="src" class="sm-img" loading="lazy" />
  </div>
</template>

<script>
export default {
  props: {
    src: String,
  },
};
</script>

<style lang="scss" scoped>
.sm-img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
}
</style>

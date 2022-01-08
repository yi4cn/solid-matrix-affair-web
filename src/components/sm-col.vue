<template>
  <div v-bind:class="colClasses">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    xs: [String, Number],
    sm: [String, Number],
    md: [String, Number],
    lg: [String, Number],
    xl: [String, Number],
  },

  setup(props) {
    const colClasses = ["xs", "sm", "md", "lg", "xl"]
      .map((sz) => (props[sz] ? "sm-col-" + sz + "-" + props[sz] : ""))
      .concat(["sm-col"])
      .join(" ");
    return { colClasses };
  },
};
</script>


<style lang="scss" scoped>
.sm-col {
  flex-grow: 0;
  flex-shrink: 0;
}
$min-width: (
  xs: 0 * 16 * 12px,
  sm: 3 * 16 * 12px,
  md: 5 * 16 * 12px,
  lg: 7 * 16 * 12px,
  xl: 9 * 16 * 12px,
);
@each $sz in xs, sm, md, lg, xl {
  @media (min-width: map-get($min-width, $sz)) {
    @each $span in 12, 6, 4, 3, 2, 1 {
      .sm-col-#{$sz}-#{$span} {
        flex-basis: calc(100% * $span / 12);
      }
    }
  }
}
</style>

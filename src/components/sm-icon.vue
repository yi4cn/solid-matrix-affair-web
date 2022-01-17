<script>
import { h } from "@vue/runtime-core";
const icons = {};
icons["dashboard"] = (
  <svg viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M19,5V7H15V5H19M9,5V11H5V5H9M19,13V19H15V13H19M9,17V19H5V17H9M21,3H13V9H21V3M11,3H3V13H11V3M21,11H13V21H21V11M11,15H3V21H11V15Z"
    />
  </svg>
);

icons["back"] = (
  <svg viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"
    />
  </svg>
);

icons["catalogs"] = (
  <svg viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M13.96,12.29L11.21,15.83L9.25,13.47L6.5,17H17.5L13.96,12.29Z"
    />
  </svg>
);

icons["search"] = (
  <svg viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
    />
  </svg>
);

icons["import"] = (
  <svg viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M15 13L11 9V12H2V14H11V17M22 12H20V21H4V16H6V19H18V11L12 5L7 10H4L12 2L22 12Z"
    />
  </svg>
);

icons["export"] = (
  <svg viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M24 13L20 9V12H11V14H20V17M18 16V21H2V12H0L10 2L18 10H15L10 5L4 11V19H16V16H18Z"
    />
  </svg>
);

icons["query"] = (
  <svg viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M19.31 18.9C19.75 18.21 20 17.38 20 16.5C20 14 18 12 15.5 12S11 14 11 16.5 13 21 15.5 21C16.37 21 17.19 20.75 17.88 20.32L21 23.39L22.39 22L19.31 18.9M15.5 19C14.12 19 13 17.88 13 16.5S14.12 14 15.5 14 18 15.12 18 16.5 16.88 19 15.5 19M5 20V12H2L12 3L22 12H20.18C19.33 11.11 18.23 10.47 17 10.18L12 5.69L7 10.19V18H9.18C9.35 18.72 9.64 19.39 10.03 20H5Z"
    />
  </svg>
);

icons["category"] = (
  <svg viewBox="0 0 1024 1024">
    <path
      fill="currentColor"
      d="M849.066667 644.778667l64.32 35.754666-397.482667 226.794667L111.530667 680.533333l64.789333-35.754666 339.562667 188.672L849.066667 644.778667z m0-170.666667l64.32 35.754667-397.482667 226.794666L111.530667 509.866667l64.789333-35.754667 339.562667 188.672L849.066667 474.112zM515.904 110.506667L922.517333 339.2l-406.613333 228.714667L109.290667 339.2l406.613333-228.714667z m0 73.429333L239.829333 339.2l276.074667 155.264 276.053333-155.264-276.053333-155.285333z"
    ></path>
  </svg>
);

icons["close"] = (
  <svg viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
    />
  </svg>
);

export default {
  props: {
    icon: String,
  },
  setup(props) {
    return () =>
      h(
        "span",
        {
          class: "icon-svg-wrapper",
        },
        icons[props.icon]
      );
  },
};
</script>
<style lang="scss" scoped>
.icon-svg-wrapper {
  display: inline-block;
  width: 1.03em;
  height: 1.03em;
  line-height: 1.03em;
  vertical-align: middle;
}
</style>

<template>
  <sm-title :title="title" />
  <div class="full">
    <div class="outbox">
      <header></header>
      <main>
        <sm-grid class="panels">
          <sm-row>
            <sm-col xs="6">
              <div class="panel">
                <div
                  class="button catalogs-btn"
                  @click="$router.push({ name: 'catalogs' })"
                >
                  <svg viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M13.96,12.29L11.21,15.83L9.25,13.47L6.5,17H17.5L13.96,12.29Z"
                    />
                  </svg>
                </div>
              </div>
            </sm-col>
            <sm-col xs="6">
              <div class="panel">
                <div class="button warehouse-btn">
                  <svg viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12 3L4 9V21H20V9L12 3M10 10H14V19H10V10M16 10H18V13H16V10M15.33 8H8.67L12 5.5L15.33 8M8 10V13H6V10H8M6 15H8V19H6V15M16 19V15H18V19H16Z"
                    />
                  </svg>
                </div>
              </div>
            </sm-col>
            <sm-col xs="6">
              <div class="panel">
                <div class="button toolkits-btn">
                  <svg viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M19 19H5V5H19V19M6.2 7.7H11.2V9.2H6.2V7.7M13 15.8H18V17.3H13V15.8M13 13.2H18V14.7H13V13.2M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18M14.1 10.9L15.5 9.5L16.9 10.9L18 9.9L16.6 8.5L18 7.1L16.9 6L15.5 7.4L14.1 6L13 7.1L14.4 8.5L13 9.9L14.1 10.9Z"
                    />
                  </svg>
                </div>
              </div>
            </sm-col>
            <sm-col xs="6">
              <div class="panel">
                <div class="button user-btn">
                  <svg viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z"
                    />
                  </svg>
                </div>
              </div>
            </sm-col>
          </sm-row>
        </sm-grid>
      </main>
      <footer>
        <div class="copyright">Powered By <b>SolidMatrix.Affair</b> Engine</div>
        <div class="placeholder"></div>
      </footer>
    </div>
  </div>
</template>

<script>
import SmCol from "@/components/sm-col.vue";
import SmGrid from "@/components/sm-grid.vue";
import smRow from "@/components/sm-row.vue";
import smTitle from "@/components/sm-title.vue";
export default {
  components: { smRow, SmGrid, SmCol, smTitle },
  setup() {
    const title = "SolidMatrix Affair";
    return { title };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/const.scss";

.full {
  height: 100vh;
  width: 100vw;
  background-color: $primary-color;
  position: absolute;
  top: 0;
  left: 0;

  .outbox {
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
header {
  width: 100%;
  text-align: center;
  height: $navbar-height + $footer-height;
}
main {
  width: 100%;
  .panels {
    margin: 0 auto;
    max-width: 256px;
  }
  .panel {
    height: 112px;
    width: 112px;
    padding: 8px;

    .button {
      padding: 24px;
      background-color: white;
      border-radius: 16px;
      cursor: pointer;
      svg {
        display: block;
        width: 64px;
        height: 64px;
        margin: 0 auto;
      }
    }
  }
}
footer {
  width: 100%;
  .copyright {
    height: $footer-height;
    line-height: $footer-height;
    text-align: center;
    font-size: $footer-font-size;
    color: $footer-color;
  }
  .placeholder {
    height: $navbar-height;
  }
}
</style>;

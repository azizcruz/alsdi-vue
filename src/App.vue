<template>
  <div class="app">
    <div v-if="isBackendWorking">
      <div class="d-flex flex-md-row flex-wrap">
        <div class="alsdi-content-wrapper col-xs-9 col-md-9 p-0">
          <go-top :has-outline="false" :size="50" :max-width="1" bg-color="#8395a7"></go-top>
          <transition name="fade" mode="out-in">
            <router-view />
          </transition>
        </div>
        <div class="col-md-3" id="alsdi-header-for-mobile">
          <AlsdiHeader />
        </div>
      </div>
    </div>
    <div v-if="isBackendWorking === false">
      <UnderMaintainance />
    </div>
    <div
      class="app-loading d-flex justify-content-center align-items-center"
      v-if="isBackendWorking === null"
    >
      <div class="loadingApp d-flex justify-content-center">
        <div>
          <div class="loading-container">
            <span class="bar-fill bar">
              <span class="bar-inside bar"></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AlsdiHeader from "@/components/global/AlsdiHeader.vue";
import UnderMaintainance from "@/components/global/UnderMaintainance.vue";
import GoTop from '@inotom/vue-go-top';
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    AlsdiHeader,
    UnderMaintainance,
    GoTop
  },
  data() {
    return {};
  },
  mounted() {
    document.oncontextmenu = new Function("return false;");
    console.log(this.isBackendWorking);
  },
  beforeMount() {
    this.loadPagesData();
  },
  methods: {
    ...mapActions(["loadPagesData"])
  },
  computed: {
    ...mapGetters(["isBackendWorking"])
  }
};
</script>

<style lang="scss">
@import url("//www.fontstatic.com/f=vip-hakm-bold");
@import url("https://use.fontawesome.com/releases/v5.8.2/css/all.css");
@import url("https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css");
@import "@/assets/_colors.scss";
@import "@/assets/_loadingAppAnim.scss";
body {
  font-family: "vip-hakm-bold", Helvetica, Arial, sans-serif !important;
  background-color: $alsdi-black;
  text-align: right !important;
  overflow-x: hidden;
  position: relative;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently */
  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-color: $alsdi-black;
  }
}
#app {
  max-width: 100%;
  overflow-wrap: break-word;
}

.app {
  overflow: hidden;
  .alsdi-header-wrapper {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }
  .app-loading {
    color: #fff;
    min-height: 100vh;
  }

  .alsdi-content-wrapper {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    min-height: 100vh;
    .vue-go-top {
      opacity: .8;
      left: 20px !important;
      bottom: 20px !important;
    }
  }
  .alsdi-footer-wrapper {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }
}

div {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>

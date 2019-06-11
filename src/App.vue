<template>
  <div class="app">
    <div>
      <div class="d-flex flex-md-row flex-wrap">
        <div class="alsdi-content-wrapper col-xs-9 col-md-9 p-0">
          <transition name="fade" mode="out-in">
            <router-view />
          </transition>
        </div>
        <div class="col-md-3" id="alsdi-header-for-mobile">
          <AlsdiHeader />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AlsdiHeader from "@/components/AlsdiHeader.vue";
import vuescroll from "vuescroll";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    AlsdiHeader,
    vuescroll
  },
  data() {
    return {};
  },
  mounted() {
    document.oncontextmenu = new Function("return false;");
  },
  created() {
    this.loadPagesData();
  },
  methods: {
    ...mapActions(["loadPagesData"])
  }
};
</script>

<style lang="scss">
@import url("//www.fontstatic.com/f=vip-hakm-bold");
@import url("https://use.fontawesome.com/releases/v5.8.2/css/all.css");
@import url("https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css");
body {
  font-family: "vip-hakm-bold", Helvetica, Arial, sans-serif !important;
  background-color: rgba(0, 0, 0, 0.6) !important;
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
    background-color: rgba(0, 0, 0, 0.7);
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
  .alsdi-content-wrapper {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    min-height: 100vh;
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

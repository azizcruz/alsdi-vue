<template>
  <div id="app ds" class="app">
    <div>
      <div class="d-flex flex-md-row flex-wrap">
        <div class="content-side col-xs-12 col-md-9 p-0">
          <router-view/>
        </div>
        <div class="col-md-3 d-none d-md-block">
            <AlsdiHeader />
        </div>
        <div class="alsdi-footer-wrapper">
          <!-- <Footer></Footer> -->
        </div>
      </div>  
    </div>    
  </div>
</template>
<script>

import AlsdiHeader from '@/components/AlsdiHeader.vue'
import Footer from '@/components/Footer.vue'


export default {
  components: {
    AlsdiHeader,
    Footer
  }
}
</script>

<style lang="scss">
@import url("//www.fontstatic.com/f=vip-hakm-bold");
body {
  font-family: 'vip-hakm-bold', Helvetica, Arial, sans-serif !important;
  background-color: #333 !important;
  overflow-x: hidden;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 100%;
  overflow-wrap: break-word;
  overflow-x: hidden;
}

.app {
  .alsdi-header-wrapper {
    -webkit-box-flex:1;
    -ms-flex:1;
    flex:1;
  }
  .alsdi-content-wrapper {
    -webkit-box-flex:1;
    -ms-flex:1;
    flex:1;
    min-height: 90vh;
  }
  .alsdi-footer-wrapper {
  -webkit-box-flex:1;
    -ms-flex:1;
    flex:1;
  }
}

div {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

</style>

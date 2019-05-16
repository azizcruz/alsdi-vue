<template>
  <div id="app d-flex flex-column">
    <AlsdiHeader></AlsdiHeader>
    <router-view/>
  </div>
</template>
<script>

import AlsdiHeader from '@/components/AlsdiHeader.vue'
export default {
  components: {
    AlsdiHeader,
  }
}
</script>

<style lang="scss">
@import url("//www.fontstatic.com/f=vip-hakm-bold");
body {
  font-family: 'vip-hakm-bold', Helvetica, Arial, sans-serif !important;
  background-color: #333 !important;
  // overflow-x: hidden;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 100%;
  overflow-wrap: break-word;
}

div {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

</style>

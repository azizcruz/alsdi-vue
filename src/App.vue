<template>
  <div id="app d-flex flex-column">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url("//www.fontstatic.com/f=vip-hakm-bold");
body {
  font-family: 'vip-hakm-bold', Helvetica, Arial, sans-serif !important;
  background-color: #636e72 !important;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 100%;
  overflow-wrap: break-word;
}

</style>

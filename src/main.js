import Vue from 'vue'
import App from './App.vue'
import router from './router'
import $ from 'jquery'
global.$ = $

// Simplebar.
import vuescroll from 'vuescroll';
Vue.use(vuescroll);

//Bootstrap framework
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-v4-rtl/dist/css/bootstrap.min.css'

//AOS library
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()

// only import the icons you use to reduce bundle size
import 'vue-awesome/icons/flag'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

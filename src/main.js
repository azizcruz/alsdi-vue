import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
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
AOS.init({
  once: true
})

// only import the icons you use to reduce bundle size
import 'vue-awesome/icons/flag'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

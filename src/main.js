import Vue from 'vue'
import App from './App.vue'
import router from './router'
import $ from 'jquery'
global.$ = $

// Simplebar.
import 'jquery.nicescroll'
// $("body").niceScroll({
//   cursorwidth:6,
//   cursorcolor:'#C4993B',
//   cursorborder:'none',
//   cursorborderradius:6,
//   autohidemode:'leave',
//   scrollspeed: 90,
//   mousescrollstep: 90,
//   spacebarenabled: false,
// });
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

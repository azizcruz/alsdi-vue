import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Simplebar.
import $ from 'jquery'
import 'jquery.nicescroll'
$("body").niceScroll({
  cursorwidth:6,
  cursorcolor:'#C4993B',
  cursorborder:'none',
  cursorborderradius:6,
  autohidemode:'leave',
  scrollspeed: 120,
  mousescrollstep: 120,
  spacebarenabled: true,
});
//Bootstrap framework
import 'bootstrap/dist/css/bootstrap.min.css';

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

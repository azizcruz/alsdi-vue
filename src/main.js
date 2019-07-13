import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Validator } from 'vee-validate';
import VeeValidate from 'vee-validate'
import $ from 'jquery'
global.$ = $

// Lazy image loadng.
import { VLazyImagePlugin } from "v-lazy-image";
Vue.use(VLazyImagePlugin);


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

// VeeValidate.
Vue.use(VeeValidate, {
  classes: true,
})
// validators.
const dictionary = {
  ar: {
    messages: {
      email: 'هذا الحقل يجب أن يكون بريد الكتروني',
      required: 'هذا الحقل مطلوب',
      regex: 'يرجى كتابة ارقام فقط',
      size: 'يجب الا يتجاوز حجم الملف 10 ميجابايت'
    }
  }
};
Validator.localize(dictionary);
Validator.localize('ar');

Vue.config.productionTip = false

// Scroll to top
import BackToTop from 'vue-backtotop'
Vue.use(BackToTop)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

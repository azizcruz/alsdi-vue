import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AboutUs from './views/AboutUs.vue'
import OurServices from './views/OurServices.vue'
import Gallery from './views/Gallery.vue'
import ContactUs from './views/ContactUs.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'alsdi-is-active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: AboutUs
    },
    {
      path: '/our-services',
      name: 'our-services',
      component: OurServices
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: ContactUs
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
})

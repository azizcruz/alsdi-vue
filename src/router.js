import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AboutUs from './views/AboutUs.vue'
import OurServices from './views/OurServices.vue'
import OurProjects from './views/OurProjects.vue'
import Gallery from './views/Gallery.vue'
import ContactUs from './views/ContactUs.vue'
import ProjectDetail from './views/ProjectDetail.vue'
import ImportantSites from './views/ImportantSites.vue'
import Page404 from './views/Page404.vue'

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
      path: '/our-projects',
      name: 'our-projects',
      component: OurProjects
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
    {
      path: '/project/:id',
      name: 'project-detail',
      component: ProjectDetail
    },
    {
      path: '/important-sites',
      name: 'important-sites',
      component: ImportantSites
    },
    {
      path: '*',
      name:'page-not-found',
      component: Page404
    }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 };
  }
})

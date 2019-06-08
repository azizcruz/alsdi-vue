import Vuex from 'vuex'
import Vue from 'vue'
import { BASE_API_LANGUAGE } from './BASE_DATA.js'

// Axios for Vue js.
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        pages: [],
        navLinks: [],
        contactLinks: {},
        mainpageData: [],
        aboutUsData: [],
        ourServicesData: [],
        ourProjectsData: []
    },
    getters: {
        pageData: state => {
            return state.pages
        },
        headerLinks: state => {
            return state.navLinks
        },
        contactUsLinks: state => {
            return state.contactLinks
        },
        mainpageData: state => {
            return state.mainpageData
        },
        aboutUsData: state => {
            return state.aboutUsData
        },
        ourServicesData: state => {
            return state.ourServicesData
        },
        ourProjectsData: state => {
            return state.ourProjectsData
        }
    },
    mutations: {
        SET_PAGES_DATA(state, data) {
            state.pages = data
        },
        SET_NAVLINKS_DATA(state, data) {
            state.navLinks = data
        },
        SET_CONTACT_LINKS(state, data) {
            state.contactLinks = data
        },
        SET_MAINPAGE_DATA(state, data){
            state.mainpageData = data
        },
        SET_ABOUTUS_DATA(state, data) {
            state.aboutUsData = data
        },
        SET_OURSERVICES_DATA(state, data) {
            state.ourServicesData = data
        },
        SET_OURPROJECTS_DATA(state, data) {
            state.ourProjectsData = data
        }
    },
    actions: {
        loadPagesData({commit}) {
            axios
                .get(BASE_API_LANGUAGE.ar + 'pages')
                .then(data => {
                    commit('SET_PAGES_DATA', data)
                    
                    // Create variable for each page data.
                    const data_links = this.state.pages.data[0].navbar_links
                    const contact_links = this.state.pages.data[5].contact_us[0]
                    const mainpageData = this.state.pages.data[0]
                    const aboutUsData = this.state.pages.data[1]
                    const ourServicesData = this.state.pages.data[2]
                    const ourProjectsData = this.state.pages.data[3]

                    // Set each page data.
                    commit('SET_NAVLINKS_DATA', data_links)
                    commit('SET_CONTACT_LINKS', contact_links)
                    commit('SET_MAINPAGE_DATA', mainpageData)
                    commit('SET_ABOUTUS_DATA', aboutUsData)
                    commit('SET_OURSERVICES_DATA', ourServicesData)
                    commit('SET_OURPROJECTS_DATA', ourProjectsData)

                    console.log(this.state.pages.data)
                })
                .catch(err => {
                    console.log(err)
                })  
        }
    }
})
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
        contactUsLogo: [],
        navLinks: [],
        contactLinks: {},
        mainpageData: [],
        aboutUsData: [],
        ourServicesData: [],
        ourProjectsData: [],
        galleryData: [],
        contactUsData: [],
        isLoading: false,
        isBackendWorking: null,
    },
    getters: {
        pageData: state => {
            return state.pages
        },
        contactUsLogo: state => {
            return state.contactUsLogo
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
        },
        galleryData: state => {
            return state.galleryData
        },
        contactUsData: state => {
            return state.contactUsData
        },
        isLoading: state => {
            return state.isLoading
        },
        isBackendWorking: state => {
            return state.isBackendWorking
        }
    },
    mutations: {
        SET_PAGES_DATA(state, data) {
            state.pages = data
        },
        SET_LOGO_DATA(state, data) {
            state.contactUsLogo = data
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
        },
        SET_GALLERY_DATA(state, data) {
            state.galleryData = data
        },
        SET_CONTACTUS_DATA(state, data) {
            state.contactUsData = data
        },
        SET_ISLOADING_DATA(state, loadState) {
            state.isLoading = loadState
        },
        SET_IS_BACKEND_WORKING(state, loadState) {
            state.isBackendWorking = loadState
        }
    },
    actions: {
        loadPagesData({commit}) {
            axios
                .get(BASE_API_LANGUAGE.ar + 'pages')
                .then(data => {
                    commit('SET_PAGES_DATA', data)
                    commit('SET_IS_BACKEND_WORKING', true)
                    
                    // Create variable for each page data.
                    const data_links = this.state.pages.data[0].navbar_links
                    const logo = this.state.pages.data[0].logo[0]
                    const contact_links = this.state.pages.data[5].contact_us[0]
                    const mainpageData = this.state.pages.data[0]
                    const aboutUsData = this.state.pages.data[1]
                    const ourServicesData = this.state.pages.data[2]
                    const ourProjectsData = this.state.pages.data[3]
                    const galleryData = this.state.pages.data[4]
                    const contactUsData = this.state.pages.data[5]

                    // Set each page data.
                    commit('SET_NAVLINKS_DATA', data_links)
                    commit('SET_LOGO_DATA', logo)
                    commit('SET_CONTACT_LINKS', contact_links)
                    commit('SET_MAINPAGE_DATA', mainpageData)
                    commit('SET_ABOUTUS_DATA', aboutUsData)
                    commit('SET_OURSERVICES_DATA', ourServicesData)
                    commit('SET_OURPROJECTS_DATA', ourProjectsData)
                    commit('SET_GALLERY_DATA', galleryData)
                    commit('SET_CONTACTUS_DATA', contactUsData)
                })
                .catch(err => {
                    commit('SET_IS_BACKEND_WORKING', false)
                    console.log(err)
                })  
        },
        isLoadingSetting({commit}, loadState) {
            commit('SET_ISLOADING_DATA', loadState)
        }
    }
})
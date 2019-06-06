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
        pages: []
    },
    mutations: {
        SET_PAGES_DATA(state, data) {
            state.pages = data
        }
    },
    actions: {
        loadPagesDate({commit}) {
            axios
                .get(BASE_API_LANGUAGE.ar + 'pages')
                .then(data => {
                    commit('SET_PAGES_DATA', data)
                })
                .catch(err => {
                    console.log(err)
                })
                
        }
    }
})
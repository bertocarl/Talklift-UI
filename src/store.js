import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    access_token: localStorage.getItem('tl_access_token'),
    currentUser: {}
  },
  getters: {
    getAccessToken (state) {
      return state.access_token
    }
  },
  mutations: {
    setAccessToken (state, token) {
      state.access_token = localStorage.setItem('tl_access_token', token)
    },
    removeAccessToken (state) {
      state.access_token = localStorage.removeItem('tl_access_token')
    }
  },
  actions: {
  }
})

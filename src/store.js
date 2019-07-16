import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    access_token: null,
    currentUser: {}
  },
  getters: {
    getAccessToken (state) {
      if (!state.access_token) {
        state.access_token = localStorage.getItem('tl_access_token')
      }
      return state.access_token
    }
  },
  mutations: {
    setAccessToken (state, token) {
      localStorage.setItem('tl_access_token', token)
      state.access_token = token
    },
    removeAccessToken (state) {
      localStorage.removeItem('tl_access_token')
    }
  },
  actions: {
  }
})

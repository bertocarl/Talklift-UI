import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'

import store from './store'
import Login from './components/Login'
import Logout from './components/Logout'

import Register from './components/Register'
import AddBusiness from './components/AddBusiness'

import Bot from './components/Bot'
import ModuleDetails from './components/bots/ModuleDetails'
import NewResponse from './components/bots/NewResponse'
import Profile from './components/Profile'
import Contacts from './components/Contacts'
import AddContact from './components/AddContact'
import NewModule from './components/bots/NewModule'

// Global css files
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter)
Vue.use(BootstrapVue)

axios.defaults.baseURL = 'https://api.talklift.com'

axios.interceptors.request.use(function (request) {
  console.log('requests', request)
  request.headers['token'] = store.getters.getAccessToken
  return request
}, function (error) {
  return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  if (error.response.status === 403 || error.response.status === 401) {
    router.push('/logout')
  }
  return Promise.reject(error)
})

const routes = [
  { path: '/', component: Bot, name: 'index' },
  { path: '/login', component: Login, name: 'login' },
  { path: '/logout', component: Logout, name: 'logout' },
  { path: '/signup/', component: Register, name: 'signup' },
  { path: '/business/', component: AddBusiness, name: 'update_business' },
  { path: '/profile/', component: Profile, name: 'profile' },
  { path: '/contacts/', component: Contacts, name: 'contacts' },
  { path: '/addcontact/', component: AddContact, name: 'add_contact' },
  { path: '/newmodule/', component: NewModule, name: 'new_module' },

  // Bot routes
  { path: '/module/:id/', component: ModuleDetails, name: 'module_details' },
  { path: '/module/:id/new-response', component: NewResponse, name: 'new_response' }
]

const router = new VueRouter({ routes })

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

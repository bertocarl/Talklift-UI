import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'

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

// Global css files
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter)
Vue.use(BootstrapVue)

axios.defaults.baseURL = 'https://api.talklift.com'
const routes = [
  { path: '/', component: Bot, name: 'index' },
  { path: '/login', component: Login, name: 'login' },
  { path: '/logout', component: Logout, name: 'logout' },
  { path: '/signup/', component: Register, name: 'signup' },
  { path: '/business/', component: AddBusiness, name: 'update_business' },
  { path: '/profile', component: Profile, name: 'profile' },
  { path: '/contacts', component: Contacts, name: 'contacts' },
  { path: '/addcontact', component: AddContact, name: 'add_contact' },

  // Bot routes
  { path: '/module/:id/', component: ModuleDetails, name: 'module_details' },
  { path: '/module/:id/new-response', component: NewResponse, name: 'new_response' }
]

const router = new VueRouter({ routes })

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

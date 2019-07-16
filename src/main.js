import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import Loading from 'vue-loading-overlay'
import VeeValidate from 'vee-validate'
import Notifications from 'vue-notification'

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
import Trigger from './components/bots/Triggers'
import Responses from './components/bots/Responses'
import EditResponse from './components/bots/EditResponse'
import Inbox from './components/Inbox'

// Global css files
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-loading-overlay/dist/vue-loading.css'
import './assets/css/global.css'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(Loading, {
  color: '#000000',
  loader: 'dots',
  width: 64,
  height: 64,
  backgroundColor: '#ffffff',
  opacity: 0.5,
  zIndex: 999
})
Vue.use(VeeValidate, {
  inject: true,
  fieldsBagName: 'veeFields'
})
Vue.use(Notifications)

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
  { path: '/inbox/', component: Inbox, name: 'inbox' },

  // Bot routes
  { path: '/module/:id/',
    component: ModuleDetails,
    name: 'module_details',
    children: [
      { path: 'new-response', component: NewResponse, name: 'new_response' },
      { path: 'triggers/', component: Trigger, name: 'triggers_list' },
      { path: 'responses/', component: Responses, name: 'responses_list' },
      { path: 'edit-response/:response_id', component: EditResponse, name: 'edit_response' }
    ]
  }
]

const router = new VueRouter({ routes })

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import Loading from 'vue-loading-overlay'
import VeeValidate from 'vee-validate'
import Notifications from 'vue-notification'
import VueChatScroll from 'vue-chat-scroll'
import responsive from 'vue-responsive'

import store from './store'
import Login from './components/Login'
import Logout from './components/Logout'
import Register from './components/Register'
import GetStarted from './components/GetStarted'

import UpdateBusiness from './components/business/UpdateBusiness'

import Bot from './components/Bot'
import ModuleDetails from './components/bots/ModuleDetails'
import NewResponse from './components/bots/NewResponse'

import Profile from './components/settings/Profile'
import Settings from './components/settings/Settings'
import SettingsUpdate from './components/settings/SettingsUpdate'
import Teams from './components/settings/Teams'

import NewModule from './components/bots/NewModule'
import EditResponse from './components/bots/EditResponse'

import Inbox from './components/inbox/Inbox'
import InboxContacts from './components/inbox/InboxContacts'
import Messages from './components/inbox/Messages'

import AddContact from './components/contacts/AddContact'
import Contacts from './components/contacts/Contacts'

import Reports from './components/Reports'
import TrainBot from './components/TrainBot'

// Global css files
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-loading-overlay/dist/vue-loading.css'
import './assets/css/global.css'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(VueChatScroll)
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
Vue.use(responsive)

axios.defaults.baseURL = 'https://api.talklift.com'
axios.interceptors.request.use(function (request) {
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
  { path: '/', component: Login, name: 'login' },
  { path: '/logout', component: Logout, name: 'logout' },
  { path: '/signup/', component: Register, name: 'signup' },
  { path: '/get-started/', component: GetStarted, name: 'get_started' },
  // Inbox routes
  { path: '/inbox/',
    component: Inbox,
    children: [
      { path: '', component: InboxContacts, name: 'inbox' },
      { path: 'messages/:contact_id', component: Messages, name: 'messages' }
    ]
  },
  // Bot routes
  { path: '/build', component: Bot, name: 'index' },
  { path: '/build/new/', component: NewModule, name: 'new_module' },
  { path: '/build/module/:id/',
    component: ModuleDetails,
    name: 'module_details',
    children: [
      { path: 'responses/new/', component: NewResponse, name: 'new_response' },
      { path: 'responses/:response_id/manage', component: EditResponse, name: 'edit_response' }
    ]
  },
  // Contacts routes
  { path: '/contacts/', component: Contacts, name: 'contacts' },
  { path: '/contacts/new/', component: AddContact, name: 'new_contact' },
  // Business routes
  { path: '/business/', component: UpdateBusiness, name: 'update_business' },
  // Settings routes
  { path: '/settings/',
    component: Settings,
    children: [
      { path: '', component: SettingsUpdate, name: 'settings_update' },
      { path: '/profile/', component: Profile, name: 'profile' },
      { path: '/teams/', component: Teams, name: 'teams' }
    ]
  },
  { path: '/train-bot/', component: TrainBot, name: 'train_bot' },
  { path: '/reports/', component: Reports, name: 'reports' }
]

const router = new VueRouter({ routes })

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

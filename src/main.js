import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'

import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'

Vue.use(VueRouter);

Vue.prototype.$http = axios
axios.defaults.baseURL = 'https://api.talklift.com'
const  accessToken  =  localStorage.getItem('access_token')

if (accessToken) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] =  accessToken
}

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/login', component: Login, name: 'login' },
  { path: '/signup/', component: Register, name: 'signup' }

];

const router = new VueRouter({ routes });

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

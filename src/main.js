import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import axios from 'axios';

import Login from './components/Login';
import Register from './components/Register';

Vue.use(VueRouter);


axios.defaults.baseURL = 'https://api.talklift.com'
// axios.defaults.headers.common['Content-Type'] = 'application/json'
// axios.defaults.headers.common['TOKEN'] = 'xxxx'

const routes = [
  { path: '/', component: Login, name: 'login' },
  { path: '/signup/', component: Register, name: 'signup' }

];

const router = new VueRouter({ routes });

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

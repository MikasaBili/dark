// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router'
import Axios from 'axios'
// use
Vue.use(VueRouter)
Vue.prototype.$http = Axios
/* eslint-disable no-new */
const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: { App }
})

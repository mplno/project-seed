import Vue from 'vue'

// ROUTER
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import routes from './routes.js'

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

// HTTP
import VueResource from 'vue-resource'
Vue.use(VueResource)

// VUEX
import store from './store'

import App from './views/app.vue'

const root = new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')

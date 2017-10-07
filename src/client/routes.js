import Home from './views/home/index.vue'

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '*', redirect: '/' }
]

export default routes

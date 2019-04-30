import Vue from 'vue'
import Router from 'vue-router'
import about from './views/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'about',
      component: about
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/Home')
    }
  ]
})

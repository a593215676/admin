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
    },
    {
      path: '/Export',
      name: 'Export',
      component: () => import('./views/Export')
    },
    {
      path: '/Mark',
      name: 'Mark',
      component: () => import('./views/Mark')
    },
    {
      path: '/Upload',
      name: 'Upload',
      component: () => import('./views/Upload')
    },
    {
      path: '/Articles',
      name: 'Articles',
      component: () => import('./views/Articles')
    },
    {
      path: '/Paging',
      name: 'Paging',
      component: () => import('./views/Paging')
    },
  ]
})

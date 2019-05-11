import Vue from 'vue'
import Router from 'vue-router'
import about from './views/About.vue'
import login from './views/Login.vue'
import register from './views/Register.vue'



Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'register',
      component: register
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/about',
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
      path: '/editor',
      name: 'editor',
      component: () => import('./views/Editor')
    },
    {
      path: '/Paging',
      name: 'Paging',
      component: () => import('./views/Paging')
    },
  ]

})
router.beforeEach((to, from, next) => {
  if (to.path === "/login"||to.path === "/") {
    next();
  } else {
    if (this.$store.state.date) next();
    else next("/login" );
  }
});
export default router;
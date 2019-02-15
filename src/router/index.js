import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/home')
    },
    {
      path: '/resume',
      name: 'resume',
      component: () => import('../components/resume')
    }
  ]
})

export default router

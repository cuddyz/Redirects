import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'

Vue.use(Router)

let routeConfig = {
  mode: 'history',
  routes: [
    {
      path: '*',
      name: 'Landing',
      component: Landing
    }
  ]
}

const router = new Router(routeConfig)

export default router

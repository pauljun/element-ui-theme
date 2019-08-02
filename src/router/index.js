import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/more',
      name: 'more',
      component: () => import('../views/more')
    },
    {
      path: '/color',
      name: 'more',
      component: () => import('../views/color')
    }
  ]
})

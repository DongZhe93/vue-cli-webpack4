import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      meta: {
        title: '首页'
      },
      component: () => import('../pages/index')
    },
    {
      path: '/page1',
      name: 'page1',
      meta: {
        title: 'page1'
      },
      component: () => import('../pages/page1')
    }
  ]
})

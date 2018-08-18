import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/components/home').default
    },
    {
      path: '/game',
      name: 'game',
      component: require('@/components/game').default
    },
    {
      path: '/errorgame',
      name: 'errorgame',
      component: require('@/components/errorgame').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

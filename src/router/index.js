import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Layout from '../pages/Layout'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
export default router
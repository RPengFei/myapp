import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Person from '../pages/Login/Personcenter'
import Layout from '../pages/Layout'
import TodoList from '../pages/TodoList/TodoList'
import strong from "../utils/Storage";
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [{
      path: '/',
      name: 'layout',
      component: Layout,
      beforeEnter: (to, from, next) => {
        if (!strong.getItem('token')) {
          next({
            path: '/login'
          })
        } else {
          next()
        }
      },
      children: [{
        path: '/',
        name: 'home',
        component: Home
      }, {
        path: '/todoList',
        name: 'todoList',
        component: TodoList
      }]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/p',
      name: 'person',
      component: Person
    },
    {
      path: '*',

      component: Login
    },
  ]
})

export default router
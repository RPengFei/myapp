import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import NotFound from '../pages/NotFound/NotFound'
import Person from '../pages/Login/Personcenter'
import Layout from '../pages/Layout'
import TodoList from '../pages/TodoList/TodoList'
import strong from "../utils/Storage";
Vue.use(VueRouter)
const router = new VueRouter({
  linkActiveClass: 'active',
  routes: [{
      path: '/',
      redirect: '/home',
      name: 'layout',
      component: Layout,
      children: [{
        path: '/home',
        name: 'home',
        component: Home
      }, {
        path: '/todoList',
        name: 'todoList',
        component: TodoList,
        beforeEnter: (to, from, next) => {
          if (!strong.getItem('token')) {
            next({
              path: '/login'
            })
          } else {
            next()
          }
        },
      }]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/test',
      name: 'person',
      component: Person
    },
    {
      path: '*',
      component: NotFound
    },
  ]
})

export default router
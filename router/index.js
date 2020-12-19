import Vue from 'vue'
import VueRouter from 'vue-router'
import Form from '../views/Form'
import MyComponents from '../views/MyComponents'
import Data from '../views/Data'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/Form',
            name: 'Form',
            component: Form
        },
        {
            path: '/Data',
            name: 'Data',
            component: Data
        },
        {
            path: '/MyComponents',
            name: 'MyComponents',
            component: MyComponents
        },
        {
            path: '*',
            redirect:'/Form'
        },
    ]
})

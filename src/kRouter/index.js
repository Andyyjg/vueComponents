import Vue from 'vue'
import VueRouter from './kVueRouter'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'main',
    component: () => import(/* webpackChunkName: "about" */ '../views/main/Home.vue')
}
]

const kVueRouter = new VueRouter({
    routes
})

export default kVueRouter

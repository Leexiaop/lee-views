import Vue from 'vue'
import VueRouter from 'vue-router'
import { Docs } from './docs'
// import { Recoil } from './recoil'

const originalReplace = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
    return originalReplace.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

export const routes = [
    {
        id: 1,
        path: '/',
        title: '介绍',
        component: () => import('@/docs/Introduce.vue')
    },
    {
        id: 2,
        path: '/views',
        title: '预览',
        component: () => import('@/docs/Views.vue')
    },
    {
        id: 3,
        path: '/doc',
        title: '文档',
        component: () => import('@/docs/Docs.vue'),
        children: Docs
    }
    // {
    //     id: 4,
    //     path: '/recoil',
    //     title: 'Recoil',
    //     component: () => import('@/docs/recoil/Recoil.vue'),
    //     children: Recoil
    // }
]

export const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

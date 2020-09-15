import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const routes = [
    {
        path: '/',
        name: 'Index',
        component: () => import('../views/Index.md'),
        meta: {
            id: 1,
            name: '首页',
            icon: '',
            children: []
        }
    },
    {
        path: '/button',
        name: 'Button',
        component: () => import('../views/Button.md'),
        meta: {
            id: 2,
            name: '按钮',
            icon: '',
            children: []
        }
    }
]

export const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

// export default router

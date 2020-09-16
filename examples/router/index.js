import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (location) {
    return originalReplace.call(this, location).catch(err => err)
}

export const routes = [
    {
        path: '/',
        name: 'Index',
        component: () => import('../docs/Index.md'),
        meta: {
            id: 1,
            name: '首页',
            icon: '',
            children: []
        }
    },
    {
        path: '/test',
        name: 'Text',
        component: () => import('../docs/test.vue'),
        meta: {
            id: 3,
            name: '测试',
            icon: '',
            children: []
        }
    },
    {
        path: '/button',
        name: 'Button',
        component: () => import('../docs/Button.md'),
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

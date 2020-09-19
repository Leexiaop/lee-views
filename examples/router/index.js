import Vue from 'vue'
import VueRouter from 'vue-router'

const originalReplace = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
    return originalReplace.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

export const routes = [
    {
        id: 1,
        path: '/',
        // name: 'Views',
        title: '预览',
        component: () => import('../docs/Views.vue')
    },
    {
        id: 2,
        path: '/doc',
        // name: 'Docs',
        title: '文档',
        component: () => import('../docs/Docs.vue'),
        children: [
            {
                id: 1,
                path: '/',
                name: 'Index',
                title: '安装教程',
                component: () => import('../docs/Index.md'),
                meta: {
                    parent: '/doc'
                }
            },
            {
                id: 2,
                path: '/doc/button',
                name: 'Button',
                title: '按钮Button',
                component: () => import('../docs/Button.md'),
                meta: {
                    parent: '/doc'
                }
            }
        ]
    }
]

export const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

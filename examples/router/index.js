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
        name: 'Views',
        title: '预览',
        component: () => import('../docs/Views.vue')
    },
    {
        id: 2,
        path: '/doc',
        // name: 'Doc',
        title: '文档',
        // component: () => import('../docs/Docs.vue'),
        children: [
            {
                id: 1,
                path: '/',
                name: 'Index',
                title: '安装教程',
                compcomponent: () => import('../docs/Index.md')
            },
            {
                id: 2,
                path: '/button',
                name: 'Button',
                title: '按钮Button',
                compcomponent: () => import('../docs/Button.md')
            }
        ]
    }
]

export const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

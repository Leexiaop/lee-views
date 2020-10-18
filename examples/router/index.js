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
        children: [
            {
                id: 1,
                path: '/',
                name: 'Index',
                title: '安装教程',
                component: () => import('@/components/docs/Index.md'),
                meta: {
                    parent: '/doc'
                }
            },
            {
                id: 2,
                path: '/doc/button',
                name: 'Button',
                title: '按钮Button',
                component: () => import('@/components/docs/Button.md'),
                meta: {
                    parent: '/doc'
                }
            },
            {
                id: 3,
                path: '/doc/modal',
                name: 'Modal',
                title: '对话框Modal',
                component: () => import('@/components/docs/Modal.md'),
                meta: {
                    parent: '/doc'
                }
            }
        ]
    }
    // {
    //     id: 4,
    //     path: '/recoil',
    //     title: 'Recoil',
    //     component: () => import('@/docs/recoil/Recoil.vue'),
    //     children: [
    //         {
    //             id: 1,
    //             path: '/',
    //             name: 'Index',
    //             title: '简介',
    //             component: () => import('@/components/recoil/Index.md'),
    //             meta: {
    //                 parent: '/recoil'
    //             }
    //         },
    //         {
    //             id: 2,
    //             path: '/recoil/tutorial',
    //             name: 'Tutorial',
    //             title: '基础教程',
    //             component: () => import('@/components/recoil/Tutorial.md'),
    //             meta: {
    //                 parent: '/recoil'
    //             }
    //         },
    //         {
    //             id: 3,
    //             path: '/recoil/guides',
    //             name: 'Guides',
    //             title: '学习指南',
    //             component: () => import('@/components/recoil/Guides.md'),
    //             meta: {
    //                 parent: '/recoil'
    //             }
    //         },
    //         {
    //             id: 4,
    //             path: '/recoil/api',
    //             name: 'Api',
    //             title: 'API参考手册',
    //             component: () => import('@/components/recoil/Api.md'),
    //             meta: {
    //                 parent: '/recoil'
    //             }
    //         }
    //     ]
    // }
]

export const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export const Recoil = [
    {
        id: 1,
        path: '/',
        name: 'Index',
        title: '简介',
        component: () => import('@/components/recoil/Index.md'),
        meta: {
            parent: '/recoil'
        }
    },
    {
        id: 2,
        path: '/recoil/tutorial',
        name: 'Tutorial',
        title: '基础教程',
        component: () => import('@/components/recoil/Tutorial.md'),
        meta: {
            parent: '/recoil'
        }
    },
    {
        id: 3,
        path: '/recoil/guides',
        name: 'Guides',
        title: '学习指南',
        component: () => import('@/components/recoil/Guides.md'),
        meta: {
            parent: '/recoil'
        }
    },
    {
        id: 4,
        path: '/recoil/api',
        name: 'Api',
        title: 'API参考手册',
        component: () => import('@/components/recoil/Api.md'),
        meta: {
            parent: '/recoil'
        }
    }
]

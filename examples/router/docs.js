export const Docs = [
    {
        id: 1,
        path: '/doc',
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

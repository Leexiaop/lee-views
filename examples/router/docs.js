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
    },
    {
        id: 4,
        path: '/doc/carousel',
        name: 'Carousel',
        title: '轮播图Carousel',
        component: () => import('@/components/docs/Carousel.md'),
        meta: {
            parent: '/doc'
        }
    },
    {
        id: 5,
        path: '/doc/collapse',
        name: 'Collapse',
        title: '折叠板Collapse',
        component: () => import('@/components/docs/Collapse.md'),
        meta: {
            parent: '/doc'
        }
    },
    {
        id: 6,
        path: '/doc/date-picker',
        name: 'DatePicker',
        title: '日期选择器DatePicker',
        component: () => import('@/components/docs/DatePicker.md'),
        meta: {
            parent: '/doc'
        }
    },
    {
        id: 7,
        path: '/doc/divider',
        name: 'Divider',
        title: '分割线Divider',
        component: () => import('@/components/docs/Divider.md'),
        meta: {
            parent: '/doc'
        }
    },
    {
        id: 8,
        path: '/doc/input',
        name: 'Input',
        title: '输入框Input',
        component: () => import('@/components/docs/Input.md'),
        meta: {
            parent: '/doc'
        }
    },
    {
        id: 9,
        path: '/doc/drawer',
        name: 'Drawer',
        title: '抽屉Drawer',
        component: () => import('@/components/docs/Drawer.md'),
        meta: {
            parent: '/doc'
        }
    },
    {
        id: 10,
        path: '/doc/pagination',
        name: 'Pagination',
        title: '分页器Pagination',
        component: () => import('@/components/docs/Pagination.md'),
        meta: {
            parent: '/doc'
        }
    },
    {
        id: 11,
        path: '/doc/select',
        name: 'Select',
        title: '选择器Select',
        component: () => import('@/components/docs/Select.md'),
        meta: {
            parent: '/doc'
        }
    },
    {
        id: 12,
        path: '/doc/steps',
        name: 'Steps',
        title: '步骤条Steps',
        component: () => import('@/components/docs/Steps.md'),
        meta: {
            parent: '/doc'
        }
    },
    {
        id: 13,
        path: '/doc/transfer',
        name: 'Transfer',
        title: '步骤条Steps',
        component: () => import('@/components/docs/Transfer.md'),
        meta: {
            parent: '/doc'
        }
    },
    {
        id: 14,
        path: '/doc/tree',
        name: 'Tree',
        title: '树装结构Tree',
        component: () => import('@/components/docs/Tree.md'),
        meta: {
            parent: '/doc'
        }
    }
]

<template>
    <div class="introduce">
        <div class="introduce-nav">
            <h1>Lee-Views</h1>
            <p>A design system for Vue by personal individual. Create an efficient and enjoyable work experience.</p>
            <lee-button type="ghost" width="152px" height="56px" color="#fff" @click="getStart">Get Start</lee-button>
        </div>
        <div class="introduce-content">
            <h2>设计初衷</h2>
            <p>读万卷书，行万里路，代码运行了那么久，却总缺个自己的UI库！！敲过了那么多行代码，用过了那么多的第三方库，总会觉得某些地方不是切合自己的每一步。走自己的路，写自己的库，未来我只想是那一个只能被模仿而永不能被超越的代码搬运工。</p>
            <ul>
                <li>
                    <h3>走自己独特的设计库风格</h3>
                    <p>前端UI组件库千千万万个，但是那都是别人的杰作，与我们自己没有多大关系，所以写组件库就要有自己的设计风格。Lee-Views的风格就是在封装的基础上，给使用者以最大的自由，去适应不同的开发UI风格。</p>
                </li>
                <li>
                    <h3>打破传统库设计</h3>
                    <p>传统的UI库，总觉得有多比较呆板的地方，在某一些细小的地方总是不能自由的发挥组件的需求，Lee-Views打破了传统组件库的设计，给了使用者更大的自由和发挥。</p>
                </li>
                <li>
                    <h3>整合多个库设计思路</h3>
                    <p>天下文章一大抄，开发UI组件库也不例外，市面上那么多的组件库，我们要做的就是抄袭他们比较好的地方，去整合一个属于自己的组件库，Lee-Views 就是一个集千万组件库的优良特点于一身的完美解决方案。走别人的路，做自己的库！</p>
                </li>
            </ul>
        </div>
        <div class="introduce-footer">
            <ul class="introduce-footer-content">
                <li v-for="link in linkList" :key="link.id">
                    <h4>{{link.title}}</h4>
                    <a v-for="child in link.children" :key="child.id" :href="child.link">
                        <template v-if="child.img">
                            <img :src="child.content" alt="">
                        </template>
                        <template v-else>
                            {{child.content}}
                        </template>
                    </a>
                </li>
            </ul>
            <div class="introduce-footer-tip">
                Made width <span>❤</span> Lee
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            linkList: [
                {
                    id: 1,
                    title: '相关资源',
                    children: [
                        {
                            id: 1,
                            content: 'Element-UI官网',
                            link: 'https://element.eleme.cn/'
                        },
                        {
                            id: 2,
                            content: 'Antd官网',
                            link: 'https://ant.design/index-cn'
                        },
                        {
                            id: 3,
                            content: 'Vant官网',
                            link: 'https://youzan.github.io/'
                        },
                        {
                            id: 4,
                            content: 'Ant Design Vue',
                            link: 'https://www.antdv.com/docs/vue/introduce-cn/'
                        },
                        {
                            id: 5,
                            content: 'Umi-React 应用开发框架',
                            link: 'https://umijs.org/'
                        },
                        {
                            id: 6,
                            content: 'Dumi-组件/文档研发工具',
                            link: 'https://d.umijs.org/'
                        },
                        {
                            id: 7,
                            content: 'Remax-全新的小程序开发体验',
                            link: 'https://remaxjs.org/'
                        },
                        {
                            id: 8,
                            content: '设计资源下载',
                            link: 'https://ant.design/docs/resources-cn'
                        },
                        {
                            id: 9,
                            content: 'Ant Motion-设计动效',
                            link: 'https://motion.ant.design/index-cn'
                        }
                    ]
                },
                {
                    id: 2,
                    title: '社区',
                    children: [
                        {
                            id: 1,
                            content: 'Github',
                            link: 'https://github.com/Leexiaop'
                        }
                    ]
                },
                {
                    id: 3,
                    title: '帮助',
                    children: [
                        {
                            id: 1,
                            content: 'CSDN',
                            link: 'https://blog.csdn.net/leelxp'
                        },
                        {
                            id: 2,
                            content: 'https://lee-views.lee.com/img/icons/qrcode.png',
                            link: '#',
                            img: true
                        }
                    ]
                },
                {
                    id: 4,
                    title: '其他资源',
                    children: [
                        {
                            id: 1,
                            content: '语雀-知识创作与分享工具',
                            link: 'https://www.yuque.com/'
                        },
                        {
                            id: 2,
                            content: '云凤蝶-移动建站平台',
                            link: 'https://www.yunfengdie.com/'
                        },
                        {
                            id: 3,
                            content: 'AntV-数据可视化',
                            link: 'https://antv.vision/'
                        },
                        {
                            id: 4,
                            content: 'Egg-企业级 Node 开发框架',
                            link: 'https://eggjs.org/zh-cn/'
                        },
                        {
                            id: 5,
                            content: 'Kitchen-Sketch 工具集',
                            link: 'https://kitchen.alipay.com/'
                        },
                        {
                            id: 6,
                            content: '蚂蚁体验科技',
                            link: 'https://xtech.antfin.com/'
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        getStart () {
            this.$router.push('/views')
        }
    }
}
</script>
<style lang="less" scoped>
.introduce {
    width: 100%;
    height: 100%;
    color: #fff;
    .introduce-nav {
        width: 100%;
        height: 40%;
        background-color: #3578e5;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .introduce-content {
        width: 80%;
        font-weight: lighter;
        margin: 0 auto;
        color: #999;
        ul {
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            li {
                list-style: none;
                width: 30%;
            }
        }
    }
    .introduce-footer {
        width: 100%;
        height: auto;
        background-color: #000;
        .introduce-footer-content {
            width: 90%;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            li {
                list-style: none;
                display: flex;
                flex-direction: column;
                margin: 16px 0;
                width: 25%;
                a {
                    display: block;
                    color: #fff;
                    text-decoration: none;
                    font-size: 14px;
                    padding: 8px 0;
                    img {
                        display: block;
                        width: 90%;
                        height: auto;
                    }
                }
            }
        }
        .introduce-footer-tip {
            width: 80%;
            height: 80px;
            line-height: 80px;
            text-align: center;
            color: #fff;
            margin: 0 auto;
            border-top: 1px solid hsla(0,0%,100%,.25);
            span {
                color: #e4393c;
            }
        }
    }
}
</style>

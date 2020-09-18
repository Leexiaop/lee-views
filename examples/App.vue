<template>
    <div class="app">
        <div class="nav">
            <p>读万卷书，行万里路，代码运行了那么久，却总缺个自己的UI库！！</p>
            <ul>
                <li v-for="item in routerList" :key="item.id" @click="onRouterClick(item)"
                    :style="{
                        color: item.id === router.id ? '#1890ff' : '#666',
                        borderBottom: item.id === router.id ? '4px solid #1890ff' : 'none'
                }">{{item.title}}</li>
            </ul>
        </div>
        <div class="main">
            <!-- <div class="content" v-if="routerChildren && routerChildren.length">
                <ul class="aside">
                    <li v-for="child in routerChildren" :key="child.id" @click="onChildRouterClick(child)"
                        :style="{
                            color: child.id === routerChild.id ? '#1890ff' : '#666',
                            backgroundColor: child.id === routerChild.id ? '#e6f7ff' : '#FFF4E8',
                            borderRight: child.id === routerChild.id ? '4px solid #1890ff' : 'none'
                    }">{{child.title}}</li>
                </ul>
            </div> -->
            <div class="content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import { routes } from './router'
export default {
    name: 'App',
    data () {
        return {
            routerList: routes,
            router: {},
            routerChildren: [],
            routerChild: {}
        }
    },
    mounted () {
        this.onRouterClick(routes[0])
    },
    methods: {
        onRouterClick (router) {
            this.router = router
            this.$router.push({ path: router.path })
            this.routerChildren = router.children
            if (router.children && router.children.length) {
                this.onChildRouterClick(router.children[0])
            }
        },
        onChildRouterClick (child) {
            this.routerChild = child
            this.$router.push({ path: `${this.router.path}${child.path}` })
        }
    }
}
</script>
<style lang="less">
.app {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    .nav {
        width: 100%;
        height: 60px;
        line-height: 60px;
        text-align: center;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #666;
        border-bottom: 1px solid #eee;
        p {
            width: 80%;
        }
        ul {
            width: 20%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            li {
                width: 100%;
                list-style: none;
            }
        }

    }
    .main {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .aside {
            height: 100%;
            width: 200px;
            background-color: #FFF4E8;
            padding: 0;
            li {
                display: flex;
                flex-direction: row;
                height: 40px;
                line-height: 40px;
                padding: 0 20px;
                div {
                  width: 100%;
                }
            }
            li:hover {
                color: red;
            }
        }
        .content {
            width: 100%;
            height: 100%;
            flex:1;
            padding: 24px;
        }
    }
}
</style>

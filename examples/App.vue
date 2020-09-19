<template>
    <div class="app">
        <div class="nav">
            <p>读万卷书，行万里路，代码运行了那么久，却总缺个自己的UI库！！</p>
            <ul>
                <li v-for="item in routerList" :key="item.id"
                    :style="{
                        color: item.path === $route.path || item.path === $route.meta.parent ? '#1890ff' : '#666',
                        borderBottom: item.path === $route.path || item.path === $route.meta.parent ? '4px solid #1890ff' : 'none'
                }">
                    <router-link :to="item.path" :class="{activeRouter: item.path === $route.path || item.path === $route.meta.parent}">
                        {{item.title}}
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import { routes } from './router'
export default {
    name: 'App',
    data () {
        return {
            routerList: routes
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
                .activeRouter {
                    color: #1890ff;
                }
                a {
                    text-decoration: none;
                    color: #666;
                }
            }
        }

    }
    .content {
        width: 100%;
        height: 100%;
        flex:1;
    }
}
</style>

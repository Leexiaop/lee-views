<template>
    <div class="app">
        <div class="nav">
            <img class="logo" src="https://lee-views.lee.com/img/icons/logo.png" alt="">
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
            <a class="github" href="https://github.com/Leexiaop/lee-views" target="_blank">Github<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMTIgMTIgNDAgNDAiPjxwYXRoIGZpbGw9IiMzMzMiIGQ9Ik0zMiAxMy40Yy0xMC41IDAtMTkgOC41LTE5IDE5IDAgOC40IDUuNSAxNS41IDEzIDE4IDEgLjIgMS4zLS40IDEuMy0uOXYtMy4yYy01LjMgMS4xLTYuNC0yLjYtNi40LTIuNi0uOS0yLjEtMi4xLTIuNy0yLjEtMi43LTEuNy0xLjIuMS0xLjEuMS0xLjEgMS45LjEgMi45IDIgMi45IDIgMS43IDIuOSA0LjUgMi4xIDUuNSAxLjYuMi0xLjIuNy0yLjEgMS4yLTIuNi00LjItLjUtOC43LTIuMS04LjctOS40IDAtMi4xLjctMy43IDItNS4xLS4yLS41LS44LTIuNC4yLTUgMCAwIDEuNi0uNSA1LjIgMiAxLjUtLjQgMy4xLS43IDQuOC0uNyAxLjYgMCAzLjMuMiA0LjcuNyAzLjYtMi40IDUuMi0yIDUuMi0yIDEgMi42LjQgNC42LjIgNSAxLjIgMS4zIDIgMyAyIDUuMSAwIDcuMy00LjUgOC45LTguNyA5LjQuNy42IDEuMyAxLjcgMS4zIDMuNXY1LjJjMCAuNS40IDEuMSAxLjMuOSA3LjUtMi42IDEzLTkuNyAxMy0xOC4xIDAtMTAuNS04LjUtMTktMTktMTl6Ii8+PC9zdmc+" alt=""></a>
            <a class="csdn" href="https://blog.csdn.net/leelxp" target="_blank">CSDN<img src="https://csdnimg.cn/cdn/content-toolbar/csdn-logo.png?v=20200416.1" alt=""></a>
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
    overflow: scroll;
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
        .logo {
            display: block;
            height: 48px;
            width: auto;
        }
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
        .github, .csdn {
            height: 100%;
            display: flex;
            align-items: center;
            text-decoration: none;
            img {
                height: 48px;
                width: auto;
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

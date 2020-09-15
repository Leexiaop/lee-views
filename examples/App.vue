<template>
    <div class="app">
        <div class="nav">读万卷书，行万里路，代码运行了那么久，却总缺个自己的UI库！！</div>
        <div class="main">
            <ul class="aside">
                <li v-for="router in routerList" :key="router.meta.id" @click="onRouterClick(router)">{{router.meta.name}}</li>
            </ul>
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
            routerList: []
        }
    },
    methods: {
        onRouterClick (router) {
            this.$router.push({ path: router.path })
        }
    },
    mounted () {
        this.routerList = routes
    }
}
</script>
<style lang="less">
.app {
    width: 100%;
    height: 100%;
    .nav {
      width: 100%;
      height: 100px;
      line-height: 100px;
      text-align: center;
      background-color: darkcyan;
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
            padding: 0 20px;
            li {
                display: flex;
                flex-direction: row;
                height: 40px;
                line-height: 40px;
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
            background-color: blue;
        }
    }
}
</style>

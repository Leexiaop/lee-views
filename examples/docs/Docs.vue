<template>
    <div class="docs">
        <ul class="docs-aside">
            <li v-for="item in menuList" :key="item.id"
                :style="{
                    color: $route.path === item.path ? '#1890ff' : '#666',
                    borderRight: $route.path === item.path ? '4px solid #1890ff' : 'none',
                    backgroundColor: $route.path === item.path ? '#e6f7ff' : '#FFF4E8'
                }"
            >
                <router-link :to="item.path" :class="{ active: $route.path === item.path }">{{item.title}}</router-link>
            </li>
        </ul>
        <div class="docs-content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import { Docs } from '@/router/docs'
export default {
    name: 'Docs',
    data () {
        return {
            menuList: Docs
        }
    }
}
</script>
<style lang="less" scoped>
.docs {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    .docs-aside {
        height: 100%;
        width: 200px;
        background-color: #FFF4E8;
        margin: 0;
        padding: 0;
        li {
            height: 50px;
            width: 100%;
            line-height: 50px;
            list-style: none;
            text-align: center;
            .active {
                color: #1890ff;
            }
            a {
                text-decoration: none;
                color: #666;
            }
        }
    }
    .docs-content {
        width: calc(100% - 240px);
        height: 100%;
    }
}
</style>

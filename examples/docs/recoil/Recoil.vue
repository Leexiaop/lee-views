<template>
    <div class="docs">
        <ul class="aside">
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
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import { Recoil } from '@/router/recoil'
export default {
    name: 'Recoil',
    data () {
        return {
            menuList: Recoil
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
    .aside {
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
    .content {
        width: 100%;
        height: 100%;
        padding: 24px;
    }
}
</style>

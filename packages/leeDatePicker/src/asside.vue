<template>
    <ul class="lee-datePicker-aside">
       <li v-for="aside in assideList" :key="aside.id">{{aside.name}}</li>
    </ul>
</template>
<script>
export default {
    name: 'DateAsside',
    data () {
        return {
            assideList: [
                {
                    id: 1,
                    name: '今天',
                    multiple: false
                },
                {
                    id: 2,
                    name: '昨天',
                    multiple: false
                },
                {
                    id: 3,
                    name: '一周前',
                    multiple: false
                },
                {
                    id: 4,
                    name: '最近一周',
                    multiple: true
                },
                {
                    id: 5,
                    name: '最近一个月',
                    multiple: true
                },
                {
                    id: 6,
                    name: '最近三个月',
                    multiple: true
                }
            ]
        }
    },
    methods: {
    }
}
</script>
<style lang="less" scoped>

</style>

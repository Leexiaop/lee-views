<template>
    <ul class="lee-datePicker-aside">
       <li v-for="aside in asideList" :key="aside.id" @click="onAsideClick(aside)">{{aside.name}}</li>
    </ul>
</template>
<script>
export default {
    name: 'DateAside',
    data () {
        return {
            asideList: [
                {
                    id: 1,
                    name: '今天'
                },
                {
                    id: 2,
                    name: '昨天'
                },
                {
                    id: 3,
                    name: '一周前'
                },
                {
                    id: 4,
                    name: '一个月前'
                },
                {
                    id: 5,
                    name: '三个月前'
                }
            ],
            day: new Date().getDate(),
            year: new Date().getFullYear(),
            month: new Date().getMonth() + 1,
            week: new Date().getDay()
        }
    },
    methods: {
        onAsideClick (item) {
            switch (item.id) {
            case 1:
                this.$emit('onConvientDate', [this.year, this.month, this.day])
                break
            case 2:
                this.$emit('onConvientDate', [this.year, this.month, this.day - 1])
                break
            case 3:
                this.$emit('onConvientDate', [this.year, this.day - 7 < 0 ? (this.month - 1) : this.month, this.day - 7])
                break
            case 4:
                this.$emit('onConvientDate', [this.month - 1 < 0 ? (this.year - 1) : this.year, this.month - 1, this.day])
                break
            case 5:
                this.$emit('onConvientDate', [this.month - 3 < 0 ? (this.year - 1) : this.year, this.month - 3, this.day])
                break
            default:
                console.log(11)
            }
        }
    }
}
</script>
<style lang="less" scoped>
.lee-datePicker-aside {
    height: 100%;
    margin: 0;
    padding: 0 16px;
    border-right: 1px solid lightgray;
    li {
        list-style: none;
        margin-top: 8px;
        white-space: nowrap;
    }
}
</style>

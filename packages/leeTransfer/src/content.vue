<template>
    <div class="lee-transfer-main">
        <div class="lee-transfer-main-title">
            <div class="lee-transfer-main-title-check">
                <input type="checkbox">{{title}}
            </div>
            <div class="lee-transfer-main-title-num">{{list.filter(a => a.checked).length}}/{{list.length}}</div>
        </div>
        <ul class="lee-transfer-main-content">
            <li v-for="(item, index) in list" :key="index">
                <input type="checkbox" :checked="item.checked" @click="onItemChecked(item)">{{item.name}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'TransferContent',
    props: {
        list: {
            type: Array,
            default: () => {
                return []
            }
        },
        title: {
            type: String,
            default: () => {
                return '全选'
            }
        }
    },
    data () {
        return {
            array: []
        }
    },
    methods: {
        onItemChecked (item) {
            item.checked = !item.checked
            this.array = this.list.filter(a => a.checked)
            this.$emit('getValue', this.list)
        }
    }
}
</script>
<style lang="less" scoped>
.lee-transfer-main {
    width: 100%;
    min-height: 480px;
    overflow: auto;
    .lee-transfer-main-title {
        height: 48px;
        padding: 0 8px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: lightgray;
        .lee-transfer-main-title-check {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    .lee-transfer-main-content {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        li {
            list-style: none;
            padding: 0 8px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
        }
    }
}
</style>

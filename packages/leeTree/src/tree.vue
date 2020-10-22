<template>
    <ul class="lee-tree">
        <li v-for="item in list" :key="item.id" @click="onTreeSelect(item)">
            <div class="lee-tree-label">
                <input type="checkbox" :disabled="disabled">
                <div class="lee-tree-text">
                    {{item.label}}
                </div>
            </div>
            <lee-tree :list="item.children" v-if="item.children && item.children.length"></lee-tree>
        </li>
    </ul>
</template>
<script>
export default {
    name: 'LeeTree',
    props: {
        list: {
            type: Array,
            default: () => {
                return [
                    {
                        id: 1,
                        label: '我是一个tree'
                    }
                ]
            }
        },
        disabled: {
            type: Boolean,
            default: () => {
                return true
            }
        }
    },
    data () {
        return {}
    },
    methods: {
        onTreeSelect (item) {
            item.show = !item.show
            this.$emit('onTreeSelect', item)
        }
    }
}
</script>
<style lang="less" scoped>
.lee-tree {
    width: 100%;
    height: auto;
    margin: 0;
    li {
        list-style: none;
        .lee-tree-label {
            display: flex;
            height: 36px;
        }
    }
}
</style>

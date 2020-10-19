<template>
    <div class="lee-input">
        <label for="input" v-if="$slots.default">
            <slot></slot>
        </label>
        <div class="lee-input-input">
            <input type="text" :style="{
                width: width,
                height: height
            }">
            <span></span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'LeeInput',
    props: {
        width: {
            type: String,
            default: () => {
                return '300px'
            }
        },
        height: {
            type: String,
            default: () => {
                return '24px'
            }
        }
    },
    data () {
        return {}
    },
    mounted () {
        console.log(this.$slots)
    },
    methods: {
    }
}
</script>
<style lang="less" scoped>
.lee-input {
    display: flex;
    align-items: center;
    label {
        height: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
}
</style>

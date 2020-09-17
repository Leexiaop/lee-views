<template>
    <button
        @click="handleButtonClick"
        :disabled="disabled"
        >
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: 'LeeButton',
    props: {
        //  button的类型：default, warning, danger, loading, link, dashed, ghost, text, primary
        type: {
            type: String,
            default: () => {
                return 'default'
            }
        },
        //  button的大小： small, middle, large
        size: {
            type: String,
            default: () => {
                return 'small'
            }
        },
        //  button的形状： circle, round
        shap: {
            type: String,
            default: () => {
                return 'round'
            }
        },
        //  button是否禁用： true, false
        disabled: {
            type: Boolean,
            default: () => {
                return false
            }
        }
    },
    data () {
        return {}
    },
    methods: {
        handleButtonClick (e) {
            this.$emit('click', e)
        }
    }
}
</script>
<style lang="less" scoped>

</style>

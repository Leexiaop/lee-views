<template>
    <button
        @click="handleButtonClick"
        :disabled="disabled"
        :style="buttonStyle"
        class="lee-button"
        >
            <template v-if="!$slots.default">按钮</template>
            <slot v-else></slot>
    </button>
</template>
<script>
export default {
    name: 'LeeButton',
    props: {
        buttonStyle: {
            type: Object,
            default: () => {
                return {}
            }
        },
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
.lee-button {
    border: none;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: #1890ff;
}
</style>

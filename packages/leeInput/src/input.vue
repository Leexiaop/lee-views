<template>
    <div class="lee-input">
        <label for="input" v-if="$slots.default" class="lee-input-label" :style="labelStyle"><slot></slot></label>
        <input :type="type" name="input" :placeholder="placeholder" class="lee-input-input" :style="inputStyle">
    </div>
</template>
<script>
export default {
    name: 'LeeInput',
    props: {
        inputStyle: {
            type: Object,
            default: () => {
                return {}
            }
        },
        labelStyle: {
            type: Object,
            default: () => {
                return {}
            }
        },
        type: {
            type: String,
            default: () => {
                return 'text'
            }
        },
        placeholder: {
            type: String,
            default: () => {
                return '请输入内容'
            }
        },
        disabled: {
            type: Boolean,
            default: () => {
                return false
            }
        },
        clear: {
            type: Boolean,
            defaullt: () => {
                return false
            }
        }
    },
    data () {
        return {}
    },
    methods: {
    }
}
</script>
<style lang="less" scoped>
.lee-input {
    width: auto;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .lee-input-label {
        max-width: 25%;
        height: 100%;
        display: flex;
        justify-items: center;
        align-items: center;
    }
    .lee-input-input {
        max-width: 75%;
        height: 100%;
        padding: 5px;
    }
}
</style>

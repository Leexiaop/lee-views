<template>
    <button
        @click="handleButtonClick"
        :disabled="disabled"
        class="lee-button"
        :class="{
            [`lee-${type}`]: true,
            'lee-shape': shape
        }"
        :style="{
            width: width,
            height: height,
            backgroundImage: `url(${background})`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            backgroundColor: background,
            borderRadius: radius,
            color: color
        }"
        >
            <div class="lee-loading" v-if="loading">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <template v-if="!$slots.default">确认</template>
            <slot v-else></slot>
    </button>
</template>
<script>
export default {
    name: 'LeeButton',
    props: {
        height: {
            type: String,
            default: () => {
                return '36px'
            }
        },
        width: {
            type: String,
            default: (val) => {
                return '80px'
            }
        },
        color: {
            type: String,
            default: () => {
                return '#333'
            }
        },
        background: {
            type: String,
            default: () => {
                return ''
            }
        },
        radius: {
            type: String,
            default: () => {
                return '4px'
            }
        },
        disabled: {
            type: Boolean,
            default: () => {
                return false
            }
        },
        type: {
            type: String,
            default: () => {
                return 'default' // default, danger, warning, ghost, success, info
            }
        },
        shape: {
            type: Boolean,
            default: () => {
                return false
            }
        },
        loading: {
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
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    position: relative;
}
.lee-default {
    background-color: #fff;
    color: #606266;
    border: 1px solid #dcdfe6;
}
.lee-warning {
    background-color: #e6a23c;
    color: #fff;
}
.lee-primary {
    background-color: #409eff;
    color: #fff;
}
.lee-danger {
    background-color: #f56c6c;
    color: #fff;
}
.lee-info {
    background-color: #909399;
    color: #fff;
}
.lee-ghost {
    background-color: rgba(0, 0, 0, 0);
    color: #606266;
    // border: 1px solid #dcdfe6;
}
.lee-shape {
    border-radius: 50%;
}
.lee-loading{
    width: 150px;
    height: 15px;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    span{
        display: inline-block;
        margin-right: 5px;
        border-radius: 50%;
        background: #fff;
        -webkit-animation: load 1.04s ease infinite;
    }
    span:last-child{
        margin-right: 0px;
    }
    @-webkit-keyframes load{
        0%{
            opacity: 1;
        }
        100%{
            opacity: 0;
        }
    }
    span:nth-child(1){
        width: 6px;
        height: 6px;
        -webkit-animation-delay:0.13s;
    }
    span:nth-child(2){
        width: 8px;
        height: 8px;
        -webkit-animation-delay:0.26s;
    }
    span:nth-child(3){
        width: 10px;
        height: 10px;
        -webkit-animation-delay:0.39s;
    }
}
</style>

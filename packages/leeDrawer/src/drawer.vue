<template>
    <div class="lee-drawer" v-if="show">
        <div class="lee-drawer-mask" @click="close('mask')"></div>
        <div class="lee-drawer-main" :class="{[`lee-drawer-main-${position}`]: true}" :style="{ width: width, height: height}">
            <div class="lee-drawer-title">
                <div class="lee-drawer-title-text">{{title ? title : ''}}</div>
                <svg t="1603682406645" @click="close('icon')"  class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1611" width="16" height="16"><path d="M512 456.310154L94.247385 38.557538a39.542154 39.542154 0 0 0-55.689847 0 39.266462 39.266462 0 0 0 0 55.689847L456.310154 512 38.557538 929.752615a39.542154 39.542154 0 0 0 0 55.689847 39.266462 39.266462 0 0 0 55.689847 0L512 567.689846l417.752615 417.752616c15.163077 15.163077 40.290462 15.36 55.689847 0a39.266462 39.266462 0 0 0 0-55.689847L567.689846 512 985.442462 94.247385a39.542154 39.542154 0 0 0 0-55.689847 39.266462 39.266462 0 0 0-55.689847 0L512 456.310154z" p-id="1612"></path></svg>
            </div>
            <div class="lee-drawer-content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'LeeDrawer',
    props: {
        show: {
            type: Boolean,
            default: () => {
                return true
            }
        },
        width: {
            type: String,
            default: () => {
                return '50%'
            }
        },
        height: {
            type: String,
            default: () => {
                return '100%'
            }
        },
        title: {
            type: String,
            default: () => {
                return '我是一个drawer'
            }
        },
        position: {
            type: String,
            default: () => {
                return 'right' // left, bottom, right, top
            }
        }
    },
    data () {
        return {}
    },
    methods: {
        close (item) {
            this.$emit('close', item)
        }
    }
}

</script>
<style lang="less" scoped>
.lee-drawer {
    width: 100%;
    height: 100%;
    .lee-drawer-mask {
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.75);
        top: 0;
        left: 0;
    }
    .lee-drawer-main {
        background-color: #fff;
        z-index: 100;
        .lee-drawer-title {
            width: 90%;
            height: 100px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .lee-drawer-content {
            width: 90%;
            height: 100%;
            margin: 0 auto;
        }
    }
    .lee-drawer-main-left {
        top: 0;
        left: 0;
        position: fixed;
        .animation-row
    }
    .lee-drawer-main-right {
        top: 0;
        right: 0;
        position: fixed;
         .animation-row
    }
    .lee-drawer-main-top {
        top: 0;
        left: 0;
        position: fixed;
        .animation-colum
    }
    .lee-drawer-main-bottom {
        bottom: 0;
        right: 0;
        position: fixed;
         .animation-colum
    }
    .animation-row () {
        animation: drawer-row 200ms;
        -moz-animation: drawer-row 200ms;/* Firefox */
        -webkit-animation: drawer-row 200ms;/* Safari 和 Chrome */
        -o-animation: drawer-row 200ms;/* Opera */
    }
    .animation-colum () {
        animation: drawer-colum 200ms;
        -moz-animation: drawer-colum 200ms;/* Firefox */
        -webkit-animation: drawer-colum 200ms;/* Safari 和 Chrome */
        -o-animation: drawer-colum 200ms;/* Opera */
    }
}
@keyframes drawer-row {
    from {
        width: 0;
    }
    to {
        width: 50%;
    }
}
@keyframes drawer-colum {
    from {
        height: 0;
    }
    to {
        height: 50%;
    }
}
</style>

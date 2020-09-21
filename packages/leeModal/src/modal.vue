<template>
    <div class="lee-modal" v-if="show" @click="onMaskClick">
        <div class="lee-modal-main" :style="modalStyle">
            <div class="lee-modal-main-title">
                <div class="lee-modal-main-title-text">{{title ? title : ''}}</div>
                <span class="lee-modal-main-title-close">关闭</span>
            </div>
            <div class="lee-modal-main-content"></div>
            <div class="lee-modal-main-footer"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LeeModal',
    props: {
        show: {
            type: Boolean,
            default: () => {
                return true
            }
        },
        modalStyle: {
            type: Object,
            default: () => {
                return {
                    width: '400px',
                    height: '300px',
                    backgroundColor: '#fff',
                    borderRadius: '8px'
                }
            }
        },
        title: {
            type: String,
            default: () => {
                return '这是一个对话框'
            }
        }
    },
    data () {
        return {}
    },
    methods: {
        onMaskClick (e) {
            console.log(e)
        }
    }
}
</script>
<style lang="less" scoped>
.lee-modal {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    .lee-modal-main {
        width: 400px;
        height: 300px;
        background-color: #fff;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0 24px;
        .lee-modal-main-title {
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            .lee-modal-main-title-text {
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: flex-start;
            }
            .lee-modal-main-title-close {
                overflow: hidden;
                white-space: nowrap;
            }
        }
        .lee-modal-main-content {
            width: 100%;
            height: 100%;
            flex: 1;
        }
    }
}
</style>

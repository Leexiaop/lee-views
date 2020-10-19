<template>
    <div class="lee-modal" v-if="show">
        <div class="lee-modal-main" :style="{
            height: height,
            width: width,
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            backgroundColor: background }">
            <div class="lee-modal-main-title" :class="{titleShow: !title}" v-if="titleShow">
                    <template v-if="!$slots.title">
                        <div class="lee-modal-main-title-content" :style="{borderBottom: !title ? 'none' : '1px solid #999'}">
                            <div class="lee-modal-main-title-text">{{title ? title : ''}}</div>
                            <span class="lee-modal-main-title-close-text" v-if="titleCloseText" @click="handleButtonClick('cancle')">{{titleCloseText}}</span>
                            <svg t="1603098109175" v-else @click="handleButtonClick('cancle')" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4155" width="48" height="48"><path d="M830.122667 573.653333a18.944 18.944 0 0 0-22.058667 15.36 322.901333 322.901333 0 0 1-318.549333 266.709334c-178.346667 0-323.413333-145.152-323.413334-323.498667a323.328 323.328 0 0 1 323.456-323.498667 323.456 323.456 0 0 1 318.378667 266.112 19.029333 19.029333 0 0 0 37.504-6.698666 357.546667 357.546667 0 0 0-56.149333-138.112A361.386667 361.386667 0 0 0 489.514667 170.666667 361.429333 361.429333 0 0 0 128 532.224c0 199.338667 162.176 361.557333 361.514667 361.557333a360.832 360.832 0 0 0 356.010666-298.069333 18.986667 18.986667 0 0 0-15.402666-22.058667" p-id="4156"></path><path d="M655.786667 363.776a20.181333 20.181333 0 0 0-28.544 0l-139.946667 139.946667-139.946667-139.946667a20.181333 20.181333 0 0 0-28.458666 28.458667l139.946666 139.946666-139.946666 139.946667a20.181333 20.181333 0 0 0 28.458666 28.501333l139.946667-139.946666 139.946667 139.946666a20.053333 20.053333 0 0 0 28.501333 0 20.181333 20.181333 0 0 0 0-28.458666l-139.946667-139.946667 139.946667-139.946667a20.181333 20.181333 0 0 0 0-28.501333" p-id="4157"></path></svg>
                        </div>
                    </template>
                    <template v-else>
                        <slot name="title"></slot>
                    </template>
            </div>
            <div class="lee-modal-main-content">
                <slot></slot>
            </div>
            <div class="lee-modal-main-footer" v-if="footerShow">
                <template v-if="!$slots.footer">
                    <div class="lee-modal-footer-main">
                        <div class="lee-modal-footer-main-btn">
                            <lee-button @click="handleButtonClick('confirm')">{{confirmText}}</lee-button>
                            <lee-button @click="handleButtonClick('cancel')">{{cancelText}}</lee-button>
                        </div>
                    </div>
                </template>
                <template v-else>
                    <slot name="footer"></slot>
                </template>
            </div>
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
                return false
            }
        },
        width: {
            type: String,
            default: () => {
                return '400px'
            }
        },
        height: {
            type: String,
            default: () => {
                return '300px'
            }
        },
        background: {
            type: String,
            default: () => {
                return '#fff'
            }
        },
        title: {
            type: String,
            default: () => {
                return '这是一个标题'
            }
        },
        'title-close-text': {
            type: String,
            default: () => {
                return ''
            }
        },
        'title-show': {
            type: Boolean,
            default: () => {
                return true
            }
        },
        'footer-show': {
            type: Boolean,
            default: () => {
                return true
            }
        },
        'confirm-text': {
            type: String,
            default: () => {
                return '确定'
            }
        },
        'cancel-text': {
            type: String,
            default: () => {
                return '取消'
            }
        }
    },
    data () {
        return {}
    },
    methods: {
        handleButtonClick (type) {
            this.$emit(type, type === 'confirm')
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
        .lee-modal-main-title {
            width: 100%;
            height: 50px;
            .lee-modal-main-title-content {
                // width: ;
                height: 100%;
                padding: 0 24px;
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
                .lee-modal-main-title-close-text {
                    overflow: hidden;
                    white-space: nowrap;
                }
            }
        }
        .titleShow {
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }
        .lee-modal-main-content {
            width: 100%;
            height: 100%;
            flex: 1;
        }
        .lee-modal-main-footer {
            width: 100%;
            height: 48px;
            .lee-modal-footer-main {
                height: 100%;
                border-top: 1px solid #999;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                padding: 0 24px;
                .lee-modal-footer-main-btn {
                    width: 100px;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-evenly;
                }
            }
        }
    }
}
</style>

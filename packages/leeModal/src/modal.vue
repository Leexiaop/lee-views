<template>
    <div class="lee-modal" v-if="show">
        <div class="lee-modal-main" :style="{
            height: height,
            width: width,
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            backgroundColor: background }">
            <div class="lee-modal-main-title" :class="{titleShow: !title}">
                    <template v-if="!$slots.title">
                        <div class="lee-modal-main-title-content">
                            <div class="lee-modal-main-title-text">{{title ? title : ''}}</div>
                            <span class="lee-modal-main-title-close-text" v-if="titleCloseText" @click="handleButtonClick('cancle')">{{titleCloseText}}</span>
                            <span class="lee-modal-main-title-close-icon" v-else @click="handleButtonClick('cancle')"></span>
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
        titleCloseText: {
            type: String,
            default: () => {
                return ''
            }
        },
        footerShow: {
            type: Boolean,
            default: () => {
                return true
            }
        },
        confirmText: {
            type: String,
            default: () => {
                return '确定'
            }
        },
        cancelText: {
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
                height: 100%;
                padding: 0 24px;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                border-bottom: 1px solid #999;
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
                .lee-modal-main-title-close-icon {
                    position: relative;
                    width: 40px;
                    height: 30px;
                }
                .lee-modal-main-title-close-icon::before,
                .lee-modal-main-title-close-icon::after {
                    position: absolute;
                    content: ' ';
                    background-color: #333;
                    left: 30px;
                    width: 1px;
                    height: 20px;
                }

                .lee-modal-main-title-close-icon::before {
                    transform: rotate(45deg);
                }

                .lee-modal-main-title-close-icon::after {
                    transform: rotate(-45deg);
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

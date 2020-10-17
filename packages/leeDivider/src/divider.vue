<template>
    <div class="lee-divider">
        <div class="left" :style="{
            borderTop: `1px ${leftDashed ? 'dashed' : 'solid'} ${leftLineColor}`,
            height: parseInt(leftHeight) > 20 ? '20px' : leftHeight,
            backgroundImage: `url(${leftLineColor})`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            width: position === 'left' ? '20%' : '100%'
        }"></div>
        <div class="middle"><slot></slot></div>
        <div class="right" :style="{
            borderTop: `1px ${rightDashed ? 'dashed' : 'solid'} ${rightLineColor}`,
            height: parseInt(rightHeight) > 20 ? '20px' : rightHeight,
            backgroundImage: `url(${rightLineColor})`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            width: position === 'right' ? '20%' : '100%'
        }"></div>
    </div>
</template>
<script>
export default {
    name: 'LeeDivider',
    props: {
        leftDashed: {
            type: Boolean,
            default: () => {
                return false
            }
        },
        rightDashed: {
            type: Boolean,
            default: () => {
                return false
            }
        },
        leftLineColor: {
            type: String,
            default: () => {
                return '#eee'
            }
        },
        rightLineColor: {
            type: String,
            default: () => {
                return '#eee'
            }
        },
        leftHeight: {
            type: String,
            default: () => {
                return ''
            }
        },
        rightHeight: {
            type: String,
            default: () => {
                return ''
            }
        },
        position: {
            type: String,
            default: () => {
                return 'center'
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
.lee-divider {
    width: 100%;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .middle {
        padding: 0 24px;
        white-space: nowrap;
    }
}
</style>

<template>
    <ul class="lee-steps" :class="{[`lee-steps-${vertical}`]: true}">
       <li v-for="(item, index) in list" :key="index" class="lee-steps-content" :style="{color: active >= index ? activeColor : 'lightgry'}">
            <div class="lee-steps-content-title">
                <div v-if="$slots.icon">
                    <slot name="icon"></slot>
                </div>
                <span v-else :style="{
                    border: active >= index ? `1px solid ${activeColor}` : '1px solid #333',
                    color: active >= index ? activeColor : '#333'
                }">{{index + 1}}</span>
                <i v-if="index < list.length - 1" :style="{
                    border: active >= index ? `1px solid ${ activeColor }` : '1px solid #333'
                }">&nbsp;</i>
            </div>
            <div class="lee-steps-content-content">
                <div>{{item.title}}</div>
                <div>{{item.description}}</div>
            </div>
        </li>
    </ul>
</template>
<script>
export default {
    name: 'LeeSteps',
    props: {
        list: {
            type: Array,
            default: () => {
                return [
                    {
                        title: '第一步',
                        description: ''
                    }
                ]
            }
        },
        vertical: {
            type: String,
            default: () => {
                return 'row' // row, colum
            }
        },
        active: {
            type: Number,
            default: () => {
                return -1
            }
        },
        'active-color': {
            type: String,
            default: () => {
                return 'green'
            }
        }
    },
    data () {
        return {}
    }
}
</script>
<style lang="less" scoped>
.lee-steps {
    width: 100%;
    padding: 0;
    margin: 0;
}
.lee-steps-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    .lee-steps-content-row
}
.lee-steps-colum {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
    .lee-steps-content-colum
}
.lee-steps-content-colum () {
    li {
        height: 100%;
        list-style: none;
        display: flex;
        .lee-steps-content-title {
            display: flex;
            flex-direction: column;
            align-items: center;
            span {
                .span
            }
            i {
                display: block;
                height: calc(100% - 48px);
                padding: 16px 0;
            }
        }
    }
}
.lee-steps-content-row () {
    li {
        width: 100%;
        list-style: none;
    }
    .lee-steps-content-title {
        width: 100%;
        display: flex;
        align-items: center;
        span {
            .span
        }
        i {
            display: block;
            width: calc(100% - 48px);
            padding: 0 16px;
        }
    }
}
.span () {
    display: block;
    width: 32px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border-radius: 50%;
    border: 1px solid #333;
}
</style>

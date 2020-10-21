<template>
    <div class="lee-datePicker-main">
        <date-aside v-if="convenient" @onConvientDate="getAsideData"></date-aside>
        <div class="lee-datePicker-content">
            <div class="lee-datePicker-content-title">
                <input type="text" v-model="value">
                <i></i>
                <input type="text" placeholder="请选择时间" v-if="second">
            </div>
            <div class="lee-datePicker-content-content">
                <date-table @getDate="getDate"></date-table>
            </div>
        </div>
    </div>
</template>
<script>
import DateAside from './aside'
import DateTable from './table'
export default {
    name: 'DateContent',
    components: {
        DateAside,
        DateTable
    },
    props: {
        convenient: {
            type: Boolean,
            default: () => {
                return true
            }
        },
        second: {
            type: Boolean,
            default: () => {
                return false
            }
        }
    },
    data () {
        return {
            value: ''
        }
    },
    methods: {
        getAsideData (value) {
            this.$emit('onGetDate', value)
            this.value = value.reduce((a, b) => a + '-' + b)
        },
        getDate (val) {
            this.$emit('onGetDate', val)
            this.value = val.reduce((a, b) => a + '-' + b)
        }
    }
}
</script>
<style lang="less" scoped>
.lee-datePicker-main {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .lee-datePicker-content {
        width: 100%;
        height: 100%;
        .lee-datePicker-content-title {
            height: 36px;
            width: 95%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 0 auto;
            border-bottom: 1px solid lightgray;
            input {
                width: 100%;
                outline: none;
                text-align: center;
            }
            i {
                display: block;
                width: 16px;
            }
        }
        .lee-datePicker-content-content {
            width: 95%;
            height: calc(100% - 36px);
            padding: 0;
            margin: 0 auto;
        }
    }
}
</style>

<template>
    <div class="lee-datePicker" :style="{ width: multiple ? '400px' : '200px' }">
        <div class="lee-datePicker-content" @click="handleDatePickerClick">
            <svg t="1603097943375" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3805" width="16" height="16"><path d="M807.680427 490.666667H509.611093V211.968C662.400427 221.610667 787.968427 338.986667 807.680427 490.666667zM469.33376 509.013333c0 0.341333 0.170667 0.597333 0.213333 0.938667 0 0.298667-0.213333 0.554667-0.213333 0.853333 0 11.093333 9.045333 20.181333 20.181333 20.181334h336a19.413333 19.413333 0 0 0 10.581334-3.456 19.84 19.84 0 0 0 14.08-20.138667C837.248427 318.592 678.86976 170.666667 489.472427 170.666667A20.138667 20.138667 0 0 0 469.33376 190.933333v318.122667z" p-id="3806"></path><path d="M829.056427 572.544a19.925333 19.925333 0 0 0-23.381334 16.298667A320.597333 320.597333 0 0 1 489.515093 853.333333c-177.152 0-321.237333-144.085333-321.237333-321.152a319.573333 319.573333 0 0 1 226.730667-307.114666 20.053333 20.053333 0 0 0 13.312-25.173334 20.010667 20.010667 0 0 0-25.173334-13.312 359.637333 359.637333 0 0 0-255.146666 345.6c0 199.338667 162.176 361.472 361.472 361.472a360.917333 360.917333 0 0 0 355.882666-297.728 20.181333 20.181333 0 0 0-16.298666-23.381333" p-id="3807"></path></svg>
            <input type="text" :placeholder="startPlaceholder">
            <template v-if="multiple">
                &nbsp;&nbsp;至&nbsp;&nbsp;
                <input type="text" :placeholder="endPlaceholder">
            </template>
            <svg t="1603097961710" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3965" width="16" height="16"><path d="M830.122667 573.653333a18.944 18.944 0 0 0-22.058667 15.36 322.901333 322.901333 0 0 1-318.549333 266.709334c-178.346667 0-323.413333-145.152-323.413334-323.498667a323.328 323.328 0 0 1 323.456-323.498667 323.456 323.456 0 0 1 318.378667 266.112 19.029333 19.029333 0 0 0 37.504-6.698666 357.546667 357.546667 0 0 0-56.149333-138.112A361.386667 361.386667 0 0 0 489.514667 170.666667 361.429333 361.429333 0 0 0 128 532.224c0 199.338667 162.176 361.557333 361.514667 361.557333a360.832 360.832 0 0 0 356.010666-298.069333 18.986667 18.986667 0 0 0-15.402666-22.058667" p-id="3966"></path><path d="M655.786667 363.776a20.181333 20.181333 0 0 0-28.544 0l-139.946667 139.946667-139.946667-139.946667a20.181333 20.181333 0 0 0-28.458666 28.458667l139.946666 139.946666-139.946666 139.946667a20.181333 20.181333 0 0 0 28.458666 28.501333l139.946667-139.946666 139.946667 139.946666a20.053333 20.053333 0 0 0 28.501333 0 20.181333 20.181333 0 0 0 0-28.458666l-139.946667-139.946667 139.946667-139.946667a20.181333 20.181333 0 0 0 0-28.501333" p-id="3967"></path></svg>
        </div>
        <lee-modal :show="show" :title-show="false">
            <template>
                <date-content></date-content>
            </template>
            <template slot="footer">
                <date-footer></date-footer>
            </template>
        </lee-modal>
    </div>
</template>
<script>
import DateContent from './content'
import DateFooter from './footer'
export default {
    name: 'LeeDatePicker',
    components: {
        DateFooter,
        DateContent
    },
    props: {
        multiple: {
            type: Boolean,
            default: () => {
                return false
            }
        },
        // type: {
        //     type: String,
        //     default: () => {
        //         return 'daterange' //  year/month/date/week/datetime/datetimerange/daterange
        //     }
        // },
        startPlaceholder: {
            type: String,
            default: () => {
                return '请选择开始时间'
            }
        },
        endPlaceholder: {
            type: String,
            default: () => {
                return '请选择结束时间'
            }
        }
    },
    data () {
        return {
            show: false,
            start: '',
            end: ''
        }
    },
    methods: {
        handleDatePickerClick () {
            this.show = true
        }
    }
}
</script>
<style lang="less" scoped>
.lee-datePicker {
    height: 24px;
    border: 1px solid lightgray;
    border-radius: 4px;
    .lee-datePicker-content {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        input {
            width: 100%;
            height: 100%;
            text-align: center;
            outline: none;
            border: none;
            padding: 0;
        }
        input::-ms-input-placeholder{
            text-align: center;
        }
        input::-webkit-input-placeholder{
            text-align: center;
        }
    }
    .lee-datePicker-mask {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
    }
}
</style>

<template>
    <div class="lee-datePicker-table">
        <div class="lee-datePicker-table-select">
            <div class="lee-datePicker-table-select-left">
                <svg t="1603183753952" @click="onYearMinus" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3094" width="16" height="16"><path d="M842.666667 864c-8.533333 0-14.933333-2.133333-21.333334-8.533333l-341.333333-309.333334c-6.4-6.4-10.666667-14.933333-10.666667-23.466666 0-8.533333 4.266667-17.066667 10.666667-23.466667l341.333333-309.333333c12.8-12.8 34.133333-10.666667 44.8 2.133333 12.8 12.8 10.666667 34.133333-2.133333 44.8L548.266667 522.666667l315.733333 285.866666c12.8 10.666667 14.933333 32 2.133333 44.8-6.4 6.4-14.933333 10.666667-23.466666 10.666667z" p-id="3095"></path><path d="M512 864c-8.533333 0-14.933333-2.133333-21.333333-8.533333L149.333333 546.133333c-6.4-6.4-10.666667-14.933333-10.666666-23.466666 0-8.533333 4.266667-17.066667 10.666666-23.466667L490.666667 189.866667c12.8-12.8 34.133333-10.666667 44.8 2.133333 12.8 12.8 10.666667 34.133333-2.133334 44.8L217.6 522.666667 533.333333 808.533333c12.8 12.8 14.933333 32 2.133334 44.8-6.4 6.4-14.933333 10.666667-23.466667 10.666667z" p-id="3096"></path></svg>
                <svg v-if="!isYearShow && !isMonthShow" @click="onMonthMinus" t="1603183844622" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3659" width="16" height="16"><path d="M384 512L731.733333 202.666667c17.066667-14.933333 19.2-42.666667 4.266667-59.733334-14.933333-17.066667-42.666667-19.2-59.733333-4.266666l-384 341.333333c-10.666667 8.533333-14.933333 19.2-14.933334 32s4.266667 23.466667 14.933334 32l384 341.333333c8.533333 6.4 19.2 10.666667 27.733333 10.666667 12.8 0 23.466667-4.266667 32-14.933333 14.933333-17.066667 14.933333-44.8-4.266667-59.733334L384 512z" p-id="3660"></path></svg>
            </div>
            <div class="lee-datePicker-table-select-middle">
                <template v-if="!isYearShow && !isMonthShow">
                    <span @click="onYearSelect">{{year}}年</span>
                    <span @click="onMonthSelect">{{month}}月</span>
                </template>
                <template v-if="isYearShow">
                    <span>{{`${year}-${year + 9}`}}年</span>
                </template>
                <template v-if="isMonthShow">
                    <span>{{year}}年</span>
                </template>
            </div>
            <div class="lee-datePicker-table-select-right">
                <svg t="1603183863411" v-if="!isYearShow && !isMonthShow" @click="onMonthAdd" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3840" width="16" height="16"><path d="M731.733333 480l-384-341.333333c-17.066667-14.933333-44.8-14.933333-59.733333 4.266666-14.933333 17.066667-14.933333 44.8 4.266667 59.733334L640 512 292.266667 821.333333c-17.066667 14.933333-19.2 42.666667-4.266667 59.733334 8.533333 8.533333 19.2 14.933333 32 14.933333 10.666667 0 19.2-4.266667 27.733333-10.666667l384-341.333333c8.533333-8.533333 14.933333-19.2 14.933334-32s-4.266667-23.466667-14.933334-32z" p-id="3841"></path></svg>
                <svg t="1603183775668" class="icon" viewBox="0 0 1024 1024" @click="onYearAdd" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3284" width="16" height="16"><path d="M544 522.666667c0-8.533333-4.266667-17.066667-10.666667-23.466667L192 189.866667c-12.8-12.8-34.133333-10.666667-44.8 2.133333-12.8 12.8-10.666667 34.133333 2.133333 44.8l315.733334 285.866667L149.333333 808.533333c-12.8 12.8-14.933333 32-2.133333 44.8 6.4 6.4 14.933333 10.666667 23.466667 10.666667 8.533333 0 14.933333-2.133333 21.333333-8.533333l341.333333-309.333334c6.4-6.4 10.666667-14.933333 10.666667-23.466666z" p-id="3285"></path><path d="M864 499.2l-341.333333-309.333333c-12.8-12.8-34.133333-10.666667-44.8 2.133333-12.8 12.8-10.666667 34.133333 2.133333 44.8l315.733333 285.866667-315.733333 285.866666c-12.8 12.8-14.933333 32-2.133333 44.8 6.4 6.4 14.933333 10.666667 23.466666 10.666667 8.533333 0 14.933333-2.133333 21.333334-8.533333l341.333333-309.333334c6.4-6.4 10.666667-14.933333 10.666667-23.466666 0-8.533333-4.266667-17.066667-10.666667-23.466667z" p-id="3286"></path></svg>
            </div>
        </div>
        <div class="lee-datePicker-table-main">
            <div class="lee-datePicker-table-main-day" v-if="!isYearShow && !isMonthShow">
                <ul class="lee-datePiceker-table-main-day-title">
                    <li v-for="week in weekList" :key="week">{{week}}</li>
                </ul>
                <ul class="lee-datePicker-table-main-day-content">
                    <li v-for="(date, index) in dateList" :key="index" @click="getDate(date)">{{date}}</li>
                </ul>
            </div>
            <ul class="lee-datePiceker-table-main-yearOrmonth" v-else>
                <li v-for="date in dateList" :key="date" @click="getDate(date)">{{isYearShow ? date : date + '月'}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'DateTable',
    data () {
        return {
            isYearShow: false,
            isMonthShow: false,
            dateList: [],
            weekList: ['日', '一', '二', '三', '四', '五', '六'],
            year: new Date().getFullYear(),
            month: new Date().getMonth() + 1,
            day: new Date().getDate()
        }
    },
    mounted () {
        this.init()
    },
    methods: {
        init () {
            //  当前月
            const currentMonthLength = new Date(this.year, this.month, 0).getDate() //  获取当前月的天数
            const currentMonthList = Array.from({ length: currentMonthLength }, (arr, index) => index + 1)
            const currentMonthFirstIndex = new Date(`${this.year}-${this.month}-1`).getDay() // 获取当月1号是星期几
            const currentMonthLastIndex = new Date(`${this.year}-${this.month}-${currentMonthLength}`).getDay() //  获取当前月的最后一天是星期几
            //  上个月
            const preMonthLength = new Date(this.year, this.month - 1, 0).getDate() // 获取上个月的天数
            const preMonthList = Array.from({ length: currentMonthFirstIndex === 0 ? 7 : currentMonthFirstIndex }, (arr, index) => preMonthLength - (currentMonthFirstIndex === 0 ? 7 : currentMonthFirstIndex) + index + 1)
            // 下个月
            const nextMonthList = Array.from({ length: 6 - currentMonthLastIndex === 0 ? 7 : (6 - currentMonthLastIndex) }, (arr, index) => index + 1)
            this.dateList = preMonthList.concat(currentMonthList, nextMonthList)
        },
        onYearSelect () {
            this.isYearShow = true
            this.isMonthShow = false
            this.dateList = Array.from({ length: 10 }, (arr, index) => new Date().getFullYear() + index)
        },
        onMonthSelect () {
            this.isYearShow = false
            this.isMonthShow = true
            this.dateList = Array.from({ length: 12 }, (arr, index) => index + 1)
        },
        onYearAdd () {
            if (this.isYearShow && !this.isMonthShow) {
                this.year += 10
                this.dateList = Array.from({ length: 10 }, (arr, index) => this.year + index)
                return
            }
            this.year++
            this.$emit('getDate', [this.year, this.month, this.day])
        },
        onYearMinus () {
            if (this.isYearShow && !this.isMonthShow) {
                this.year -= 10
                this.dateList = Array.from({ length: 10 }, (arr, index) => this.year + index)
                return
            }
            this.year--
            this.$emit('getDate', [this.year, this.month, this.day])
        },
        onMonthAdd () {
            if (this.month < 12) {
                this.month++
            }
            this.$emit('getDate', [this.year, this.month, this.day])
        },
        onMonthMinus () {
            if (this.month > 1) {
                this.month--
            }
            this.$emit('getDate', [this.year, this.month, this.day])
        },
        getDate (date) {
            if (this.isYearShow) {
                this.year = date
                this.isYearShow = false
            } else if (this.isMonthShow) {
                this.month = date
                this.isMonthShow = false
            } else {
                this.day = date
            }
            this.$emit('getDate', [this.year, this.month, this.day])
            this.init()
        }
    }
}
</script>
<style lang="less" scoped>
.lee-datePicker-table {
    width: 100%;
    height: 100%;
    .lee-datePicker-table-select {
        width: 100%;
        height: 36px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 8px;
        .lee-datePicker-table-select-left, .lee-datePicker-table-select-middle, lee-datePicker-table-select-right {
            display: flex;
            align-items: center;
        }
    }
    .lee-datePicker-table-main {
        width: 100%;
        height: calc(100% - 44px);
        .lee-datePicker-table-main-day {
            width: 100%;
            height: 100%;
            .lee-datePiceker-table-main-day-title {
                width: 100%;
                padding: 0;
                margin: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                li {
                    list-style: none;
                    width: 100%;
                    text-align: center;
                }
            }
            .lee-datePicker-table-main-day-content {
                width: 100%;
                height: calc(100% - 24px);
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: flex-start;
                padding: 0;
                margin: 0;
                li {
                    list-style: none;
                    width: 100%/7;
                    text-align: center;
                }
            }
        }
        .lee-datePiceker-table-main-yearOrmonth {
            width: 100%;
            height: 100%;
            padding: 0;
            margin: 0;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-wrap: wrap;
            li {
                list-style: none;
                width: 25%;
                text-align: center;
            }
        }
    }
}
</style>

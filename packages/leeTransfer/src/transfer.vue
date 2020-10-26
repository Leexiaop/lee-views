<template>
    <div class="lee-transfer">
        <div class="lee-transfer-in">
            <transfer-content :list="selectArr" :title="selectTitle" @getValue="onDataSelect"></transfer-content>
        </div>
        <div class="lee-transfer-btn">
            <lee-button type="ghost" @click="onBtnClick(false)">
                <svg t="1603694352456" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1276" width="32" height="32"><path d="M532.526499 904.817574L139.506311 511.797385 532.526499 118.777197c12.258185-12.258185 12.432147-32.892131-0.187265-45.51052-12.707416-12.707416-32.995485-12.703323-45.511543-0.187265L75.166957 484.739123c-7.120165 7.120165-10.163477 17.065677-8.990768 26.624381-1.500167 9.755178 1.5104 20.010753 8.990768 27.491121l411.660734 411.660734c12.258185 12.258185 32.892131 12.432147 45.511543-0.187265 12.707416-12.707416 12.7023-32.995485 0.187265-45.51052z" p-id="1277"></path></svg>
            </lee-button>
            <lee-button @click="confirm">
                完成
            </lee-button>
            <lee-button type="ghost" @click="onBtnClick(true)">
                <svg t="1603694332742" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1091" width="32" height="32"><path d="M492.675886 904.817574L885.696074 511.797385 492.675886 118.777197c-12.258185-12.258185-12.432147-32.892131 0.187265-45.51052 12.707416-12.707416 32.995485-12.703323 45.511543-0.187265l411.660734 411.660734c7.120165 7.120165 10.163477 17.065677 8.990768 26.624381 1.500167 9.755178-1.5104 20.010753-8.990768 27.491121L538.374694 950.515359c-12.258185 12.258185-32.892131 12.432147-45.511543-0.187265-12.707416-12.707416-12.703323-32.995485-0.187265-45.51052z" p-id="1092"></path></svg>
            </lee-button>
        </div>
        <div class="lee-transfer-out">
            <transfer-content :title="selectedTitle" :list="selectedArr" @getValue="onDataSelect"></transfer-content>
        </div>
    </div>
</template>
<script>
import TransferContent from './content'

export default {
    name: 'LeeTransfer',
    components: {
        TransferContent
    },
    props: {
        list: {
            type: Array,
            default: () => {
                return []
            }
        },
        'select-title': {
            type: String,
            default: () => {
                return '备选'
            }
        },
        'selected-title': {
            type: String,
            default: () => {
                return '已选'
            }
        }
    },
    data () {
        return {
            selectedArr: [],
            arr: [],
            selectArr: this.list
        }
    },
    methods: {
        onDataSelect (data) {
            this.arr = data
        },
        onBtnClick (item) {
            if (item) {
                this.selectArr = this.selectArr.filter(a => !a.checked)
                const arr = []
                for (let i = 0; i < this.list.length; i++) {
                    if (this.selectArr.indexOf(this.list[i]) < 0) {
                        this.list[i].checked = false
                        arr.push(this.list[i])
                    }
                }
                this.selectedArr = arr
            } else {
                this.selectedArr = this.arr.filter(a => !a.checked)
                const arr = []
                for (let i = 0; i < this.list.length; i++) {
                    if (this.selectedArr.indexOf(this.list[i]) < 0) {
                        this.list[i].checked = false
                        arr.push(this.list[i])
                    }
                }
                this.selectArr = arr
            }
        },
        confirm () {
            this.$emit('confirm', this.selectedArr)
        }
    }
}
</script>
<style lang="less" scoped>
.lee-transfer {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .lee-transfer-in, .lee-transfer-out, .lee-transfer-btn {
        border: 1px solid red;
        width: 100%;
        height: auto;
        display: flex;
        align-items: baseline;
    }
    .lee-transfer-btn {
        flex: 1;
        display: flex;
        align-items: center;
    }
}
</style>

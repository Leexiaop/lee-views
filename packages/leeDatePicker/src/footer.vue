<template>
    <div class="lee-datePicker-footer">
        <div class="lee-datePicker-footer-content">
            <lee-button @click="onButtonClick('clear')" type="ghost" color="#1890ff">清除</lee-button>
            <lee-button @click="onButtonClick('confirm')">确认</lee-button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'DateFooter',
    data () {
        return {}
    },
    methods: {
        onButtonClick (item) {
            this.$emit(item, item)
        }
    }
}
</script>
<style lang="less" scoped>
.lee-datePicker-footer {
    width: 100%;
    height: 100%;
    border-top: 1px solid lightgray;
    .lee-datePicker-footer-content {
        width: 95%;
        height: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
}
</style>

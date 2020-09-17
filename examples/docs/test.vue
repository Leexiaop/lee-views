<template>
    <div>
        <lee-button @click="handleButtonClick">按钮</lee-button>
    </div>
</template>
<script>
import demo from './Button.md'
console.log(demo)
export default {
    data () {
        return {
            md: demo
        }
    },
    methods: {
        handleButtonClick (e) {
            console.log(e)
        }
    }
}
</script>
<style lang="less" scoped>
</style>

<template>
    <div class="views">
        <lee-button>按钮</lee-button>
    </div>
</template>
<script>
// import LeeButton from '../../packages/index'
export default {
    // components: {
    //     LeeButton
    // },
    data () {
        return {
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
.views {
    width: 100%;
    height: 100%;
    padding: 24px;
}
</style>

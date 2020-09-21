<template>
    <div class="views">
        <lee-button :buttonStyle="{backgroundColor: 'red'}" @click="handleButtonClick"></lee-button>
        <lee-input :inputStyle="{width: '300px'}">标签</lee-input>
        <lee-modal></lee-modal>
    </div>
</template>
<script>
export default {
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

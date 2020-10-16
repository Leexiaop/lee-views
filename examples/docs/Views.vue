<template>
    <div class="views">
        <lee-button :buttonStyle="{backgroundColor: 'red'}" @click="handleButtonClick"></lee-button>
        <lee-input :inputStyle="{width: '300px'}">标签</lee-input>
        <lee-modal background="'https://cdn.qsebao.com/zbb/static/images/drgs/landPage/ganyuanbao/header-img_3.png'">
            <!-- <div slot="title">dadadadad</div> -->
            <div>这里是    &nbsp;内容</div>
            <div class=""></div>
        </lee-modal>
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

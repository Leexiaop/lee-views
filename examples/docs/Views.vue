<template>
    <div class="views">
        <!-- <lee-button type="danger" size="large" :loading="false" :shape="false" @click="handleButtonClick"></lee-button> -->
        <!-- <lee-modal></lee-modal> -->
        <!-- <lee-divider position="left" :leftDashed="true" :rightDashed="false" leftHeight="15px" leftLineColor="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602849726859&di=e4ba67718d65acc56a197b1af073271f&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F56%2F12%2F01300000164151121576126282411.jpg"><span style="color: red;">我是分割线</span></lee-divider> -->
        <!-- <lee-input>姓名</lee-input> -->
        <!-- <lee-date-picker></lee-date-picker> -->
        <!-- <lee-tree :list="list"></lee-tree> -->
        <lee-button type="danger" @click="next">下一步</lee-button>
        <lee-steps :active="active">
            <!-- <div slot="icon">
                <svg t="1603447900121" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3852" width="32" height="32"><path d="M250.496 320h523.008l49.152-49.152 90.496 90.496L832 442.496V512h128v128h-128v6.464c0 38.016-6.592 74.432-18.752 108.224l99.84 99.968-90.432 90.496-78.464-78.464A319.488 319.488 0 0 1 576 960v-188.16a64 64 0 1 0-128 0V960a319.488 319.488 0 0 1-168.192-93.44l-78.464 78.528-90.496-90.496 99.904-99.968A319.424 319.424 0 0 1 192 646.464V640H64V512h128V442.496L110.848 361.344l90.496-90.496 49.152 49.152zM320 256a192 192 0 1 1 384 0H320z" fill="#262626" p-id="3853"></path></svg>
            </div> -->
        </lee-steps>
    </div>
</template>
<script>
export default {
    data () {
        return {
            active: 0,
            list: [
                {
                    id: 1,
                    label: '我是一级1',
                    children: [
                        {
                            id: 1,
                            label: '我是二级1-1'
                        }
                    ]
                },
                {
                    id: 2,
                    label: '我是一级2',
                    children: [
                        {
                            id: 1,
                            label: '我是二级2-1',
                            children: [
                                {
                                    id: 1,
                                    label: '我是二级2-1-1'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        handleButtonClick (e) {
            console.log(e)
        },
        next () {
            this.active++
        }
    }
}
</script>
<style lang="less" scoped>
.views {
    width: 100%;
    height: 100%;
}
</style>

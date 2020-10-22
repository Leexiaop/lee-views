<template>
    <div class="views">
        <!-- <lee-button type="danger" size="large" :loading="false" :shape="false" @click="handleButtonClick"></lee-button> -->
        <!-- <lee-modal></lee-modal> -->
        <!-- <lee-divider position="left" :leftDashed="true" :rightDashed="false" leftHeight="15px" leftLineColor="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602849726859&di=e4ba67718d65acc56a197b1af073271f&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F56%2F12%2F01300000164151121576126282411.jpg"><span style="color: red;">我是分割线</span></lee-divider> -->
        <!-- <lee-input>姓名</lee-input> -->
        <!-- <lee-date-picker></lee-date-picker> -->
        <lee-tree :list="list"></lee-tree>
    </div>
</template>
<script>
export default {
    data () {
        return {
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

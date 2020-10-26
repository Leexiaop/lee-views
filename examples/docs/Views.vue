<template>
    <div class="views">
        <!-- <lee-button type="danger" size="large" :loading="false" :shape="false" @click="handleButtonClick"></lee-button> -->
        <!-- <lee-modal></lee-modal> -->
        <!-- <lee-divider position="left" :leftDashed="true" :rightDashed="false" leftHeight="15px" leftLineColor="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602849726859&di=e4ba67718d65acc56a197b1af073271f&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F56%2F12%2F01300000164151121576126282411.jpg"><span style="color: red;">我是分割线</span></lee-divider> -->
        <!-- <lee-input>姓名</lee-input> -->
        <!-- <lee-date-picker></lee-date-picker> -->
        <!-- <lee-tree :list="list"></lee-tree> -->
        <lee-button type="danger" @click="next">下一步</lee-button>
        <!-- <lee-steps :active="active" :list="[]"></lee-steps> -->
        <lee-drawer title="我要打开抽屉" :show="show">dddd</lee-drawer>
    </div>
</template>
<script>
export default {
    data () {
        return {
            show: false,
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
            this.show = true
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

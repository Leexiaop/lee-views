<template>
    <button :type="type">我就一个按钮</button>
</template>
<script>
export default {
    name: 'LeeButton',
    props: {
        type: {
            type: String,
            default: () => {
                return 'default'
            }
        }
    },
    data () {
        return {
            button: '按钮'
        }
    }
}
</script>
<style lang="less" scoped>

</style>

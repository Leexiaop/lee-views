<template>
    <div class="lee-carousel">我是轮博</div>
</template>
<script>
export default {
    name: 'LeeCarousel',
    props: {
        list: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    data () {
        return {}
    }
}
</script>
<style lang="less" scoped>

</style>

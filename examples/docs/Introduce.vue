<template>
    <div class="introduce">
        <div class="introduce-nav">
            <h1>Lee-Views</h1>
            <p>A design system for Vue by personal individual. Create an efficient and enjoyable work experience.</p>
            <lee-button type="ghost" width="152px" height="56px" color="#fff" @click="getStart">Get Start</lee-button>
        </div>
        <ul class="introduce-content"></ul>
        <div class="introduce-footer">
            <ul class="introduce-footer-content">
                <li>ddd</li>
            </ul>
            <div class="introduce-footer-tip">Made width by Lee</div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
        }
    },
    methods: {
        getStart () {
            this.$router.push('/views')
        }
    }
}
</script>
<style lang="less" scoped>
.introduce {
    width: 100%;
    height: 100%;
    color: #fff;
    .introduce-nav {
        width: 100%;
        height: 40%;
        background-color: #3578e5;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .introduce-footer {
        width: 100%;
        height: 300px;
        background-color: #000;
        .introduce-footer-content {}
        .introduce-footer-tip {
            width: 80%;
            height: 80px;
            line-height: 80px;
            text-align: center;
            color: #fff;
            margin: 0 auto;
            border-top: 1px solid hsla(0,0%,100%,.25);
        }
    }
}
</style>

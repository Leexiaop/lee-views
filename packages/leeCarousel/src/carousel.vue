<template>
    <div class="lee-carousel">
        <img :src="list[activeIndex]" alt="">
        <ul class="lee-carousel-hand">
            <li v-for="(item, index) in list" :key="index" :class="{active: index === activeIndex}" @click="onCarouselChange(index)"></li>
        </ul>
    </div>
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
        return {
            activeIndex: 0,
            // list: [
            //     'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603977658654&di=2542f5c7ff6eeb52129a6f47fc4eef60&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2F201608%2F07%2F074257jwuid4svrj17jivr.jpg',
            //     'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603977658652&di=5e2ef58d4daf468f2b1dc3b9be9067df&imgtype=0&src=http%3A%2F%2Fimage2.cnpp.cn%2Fupload2%2Fnews%2F20130921%2F162907_82733_url.jpg',
            //     'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603977658650&di=1a39e74c6c8233e877658043f61d9b87&imgtype=0&src=http%3A%2F%2F01.minipic.eastday.com%2F20171012%2F20171012134904_b0a15024eb012333e5b2fe1b874fcd3d_6.jpeg',
            //     'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603977658648&di=419a14dde80075eba2fea4e665753b9d&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201304%2F25%2F195057xh9wunu9m77wcycd.jpg',
            //     'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603977658640&di=688a8da51febac8a687bdab1a6929a9d&imgtype=0&src=http%3A%2F%2F01.minipic.eastday.com%2F20181107%2F20181107134300_f246a1afda9cf84c6d6586dd019c965b_3.jpeg',
            //     'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603977765575&di=7d24abb3788f3bbd2087a5f9906a6cd2&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201303%2F21%2F104741kyuahhougue8ekvo.jpg'
            // ],
            timer: ''
        }
    },
    mounted () {
        this.init()
    },
    methods: {
        init () {
            const that = this
            this.timer = setInterval(() => {
                that.activeIndex++
                if (that.activeIndex > that.list.length - 1) {
                    that.activeIndex = 0
                }
            }, 3000)
        },
        moveIn () {
            clearInterval(this.timer)
        },
        moveOut () {
            this.init()
        },
        onCarouselChange (index) {
            this.activeIndex = index
        }
    }
}
</script>
<style lang="less" scoped>
.lee-carousel {
    width: 100%;
    height: auto;
    display: flex;
    overflow: hidden;
    position: relative;
    img {
        display: block;
        width: 100%;
        height: auto;
    }
    .lee-carousel-hand {
        width: auto;
        margin: 0 auto;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 50%;
        bottom: 24px;
        transform: translate(-50%, 0);
        li {
            list-style: none;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            border: 1px solid #fff;
            margin: 0 4px;
        }
        li.active {
            border: none;
            background-color: rgba(256, 256, 256, 0.7);
        }
    }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

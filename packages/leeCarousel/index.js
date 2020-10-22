import LeeCarousel from './src/carousel.vue'

LeeCarousel.install = function (Vue) {
    Vue.component(LeeCarousel.name, LeeCarousel)
}

export default LeeCarousel

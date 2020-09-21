import LeeButton from './src/button.vue'

LeeButton.install = function (Vue) {
    Vue.component(LeeButton.name, LeeButton)
}

export default LeeButton

import LeeModal from './src/modal.vue'

LeeModal.install = function (Vue) {
    Vue.component(LeeModal.name, LeeModal)
}

export default LeeModal

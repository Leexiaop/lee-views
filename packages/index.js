import LeeButton from './leeButton/index.js'
import LeeInput from './leeInput/index.js'
import LeeModal from './leeModal/index.js'
import LeeDivider from './leeDivider/index.js'
import LeeDatePicker from './leeDatePicker'

const components = [
    LeeButton,
    LeeInput,
    LeeModal,
    LeeDivider,
    LeeDatePicker
]

const install = function (Vue) {
    if (install.installed) return
    components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    ...components
}

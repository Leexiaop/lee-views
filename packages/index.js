import LeeButton from './leeButton'
import LeeInput from './leeInput'
import LeeModal from './leeModal'
import LeeDivider from './leeDivider'
import LeeDatePicker from './leeDatePicker'
import LeeTree from './leeTree'

const components = [
    LeeButton,
    LeeInput,
    LeeModal,
    LeeDivider,
    LeeDatePicker,
    LeeTree
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

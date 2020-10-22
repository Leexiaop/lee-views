import LeeButton from './leeButton'
import LeeInput from './leeInput'
import LeeModal from './leeModal'
import LeeDivider from './leeDivider'
import LeeDatePicker from './leeDatePicker'
import LeeTree from './leeTree'
import LeeDrawer from './leeDrawer'
import LeeTransfer from './leeTransfer'
import LeeSteps from './leeSteps'
import LeeSelect from './leeSelect'
import LeePagination from './leePagination'
import LeeCollapse from './leeCollapse'
import LeeCarousel from './leeCarousel'

const components = [
    LeeButton,
    LeeInput,
    LeeModal,
    LeeDivider,
    LeeDatePicker,
    LeeTree,
    LeeDrawer,
    LeeTransfer,
    LeeSteps,
    LeeSelect,
    LeePagination,
    LeeCollapse,
    LeeCarousel
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

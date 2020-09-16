import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import { router } from './router'
import LeeViews from '../packages/index'

Vue.config.productionTip = false
Vue.use(LeeViews)
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')

import LeeTree from './src/tree'

LeeTree.install = function (Vue) {
    Vue.compoments(LeeTree.name, LeeTree)
}

export default LeeTree

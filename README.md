# lee-views介绍
```
这是一个当前正在开发的vue2.x组件库，兼容性，样式等等均为未知，只是实现了相关组件的基本逻辑，所以慎用，但是如何是以学习为主，那请参考当前组件库的开发思路，也许你会觉得组件的开发也并非那么难，当然本库的实现方式也并不是大师级别的。。。。
```

## 组件库的安装
```
npm install lee-views
```

## 快速开始
```
import Vue from 'vue'
import Element from 'element-ui'
 
Vue.use(Element)
 
// or
import {
  Select,
  Button
  // ...
} from 'element-ui'
 
Vue.component(Select.name, Select)
Vue.component(Button.name, Button)
```

### Github代码仓库地址
See [Github](https://github.com/Leexiaop/lee-views).

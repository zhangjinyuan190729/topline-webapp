import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { relativeTime } from '@/utils/datetime.js'
import {
  Button,
  NavBar,
  Field,
  Toast,
  CellGroup,
  Tabbar,
  TabbarItem,
  Tab,
  Tabs,
  List,
  PullRefresh,
  Cell,
  Grid,
  GridItem,
  Image,
  Icon,
  Lazyload,
  Popup
} from 'vant'
import './style/index.less'
// 表单验证插件导入
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import zhCN from 'vee-validate/dist/locale/zh_CN' // 加载验证插件的语言包
import * as rules from 'vee-validate/dist/rules'
// 配置使用中文语言
for (let rule in rules) {
  extend(rule, {
    ...rules[rule], // add the rule
    message: zhCN.messages[rule] // add its message
  })
}
// 注册为全局组件
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
// vant 移动端组件库按需导入
Vue
  .use(Button)
  .use(NavBar)
  .use(Field)
  .use(Toast)
  .use(CellGroup)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Tab)
  .use(Tabs)
  .use(List)
  .use(PullRefresh)
  .use(Cell)
  .use(Grid)
  .use(GridItem)
  .use(Image)
  .use(Icon)
  .use(Lazyload)
  .use(Popup)
Vue.config.productionTip = false
// 全局过滤器
Vue.filter('relativeTime', relativeTime)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

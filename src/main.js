import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, NavBar, Field, Toast } from 'vant'
import './style/index.less'

Vue
  .use(Button)
  .use(NavBar)
  .use(Field)
  .use(Toast)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

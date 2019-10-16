import Vue from 'vue'
import VueRouter from 'vue-router'
import tabbar from '@/views/tabbar'
import Login from '@/views/login'
import Home from '@/views/home'
import Search from '@/views/search'

Vue.use(VueRouter)

const router = new VueRouter({
  // 配置路由表
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    { name: 'search',
      path: '/search',
      component: Search
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'home',
      path: '/home',
      component: tabbar,
      children: [
        {
          name: 'home',
          path: '', // 默认子路由
          component: Home
        }
      ]
    }

  ]

})

export default router

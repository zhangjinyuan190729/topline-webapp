import Vue from 'vue'
import Vuex from 'vuex'
import { getItem } from '@/utils/storage.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 用户信息
    user: getItem()
  },
  mutations: {
    gettoken (state, user) {
      state.user = user
    }
  },
  actions: {

  }
})

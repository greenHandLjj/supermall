import Vue from "vue"
import Vuex from "vuex"

// 安装
Vue.use(Vuex)

import state from "./state"
import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"

// 创建
let store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

// 导出
export default store
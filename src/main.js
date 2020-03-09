import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 封装的提示框组件
import Toast from './components/content/toast'
Vue.use(Toast)

// 懒加载
import VueLazyLoad from "vue-lazyload"
Vue.use(VueLazyLoad, {
  loading: './assets/img/common/placeholder.png'
})

Vue.config.productionTip = false

// Vue 总线
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

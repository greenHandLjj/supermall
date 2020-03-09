import Toast from './Toast'

const toast = {
  install(Vue) {
    // 1 创建一个Vue子类组件
    const ToastCom = Vue.extend(Toast)

    // 2 创建一个该子类实例并挂载到一个元素上
    const instance = new ToastCom()

    // 3 将这个实例挂载到动态创建的元素上,并将元素添加到全局结构中
    instance.$mount(document.createElement('div'))
    document.body.appendChild(instance.$el)

    // 4 在Vue原型上注册方法，控制组件
    Vue.prototype.$toast = instance
  }
}

export default toast
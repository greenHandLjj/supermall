import BackTop from "components/content/backTop/BackTop"

// 混入
export const backTopMixin = {
  data() {
    return {
      // 返回顶部按钮是否显示
      isShow: false
    }
  },
  components: {
    BackTop
  },
  methods: {
    backTop() {
      // 调用组件内的方法，回到顶部
      this.$refs.scroll.scrollTo()
    }
  }
}
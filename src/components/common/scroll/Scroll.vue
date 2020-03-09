<template>
  <div class="wrapper" ref="wrapper">
    <div>

      <slot />
      
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    isClick: {
      type: Boolean,
      default: false
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    // 初始化程序
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: this.isClick,
      // 默认为0
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })

    if(this.probeType === 2 || this.probeType === 3) {
      this.scroll.on('scroll', (posi) => {
        // 触发外界回调
        this.$emit("scroll", posi)
      })
    }

    if(this.pullUpLoad) {
      this.scroll.on('pullingUp', () => {
        this.$emit("pullingUp")
      })
    }
  },
  methods: {
    // 回到顶部
    scrollTo(x = 0, y = 0, time = 400) {
      this.scroll.scrollTo(x, y, time)

    },
    // 重新计算高度
    refresh() {
      this.scroll.refresh()
    },
    // 准备下一次上拉加载
    finishPullUp() {
      this.scroll.finishPullUp()
    },
    // 获取当前滚动距离
    getScrollY() {
      return this.scroll.y
    }
  }
}
</script>

<style lang="less" scoped>

</style>
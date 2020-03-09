<template>
  <div id="detail">
    <!-- 导航栏 -->
    <detail-nav ref="detailNav" @detailClick="detailClick" class="de-nav"></detail-nav>

    <!-- main -->
    <scroll class="main" ref="scroll" @scroll="scroll" @pullingUp="pullingUp" :probe-type="3" :pull-up-load="true">
      <!-- banner -->
      <swiper />
      <!-- 产品信息 -->
      <detail-head :info="details.test"></detail-head>
      <!-- 产品参数 -->
      <detail-params ref="params" @imageLoad="imageLoad"></detail-params>
      <!-- 评价 -->
      <detail-comment ref="comment"></detail-comment>
      <!-- 推荐 -->
      <list :list="detailData" ref="list"  />
    </scroll>

    <!-- footer -->
    <detail-footer @addCar="addCar"></detail-footer>

    <!-- 回到顶部 -->
    <back-top @click.native="backTop" v-show="isShow"></back-top>
    
    <!-- 提示信息 -->
    <toast v-if="show" />
  </div>
</template>

<script>
// 因为没有后台接口，所以此API暂且无用
import {request} from "network/detailRequest" 
import {shake} from "common/util"
import {backTopMixin} from "common/mixin"

import DetailNav from "./children/DetailNav"
import DetailHead from "./children/DetailHead"
import DetailComment from "./children/DetailComment"
import DetailParams from "./children/DetailParams"
import DetailFooter from "./children/DetailFooter"

import Swiper from "components/common/swiper/Swiper"
import Scroll from "components/common/scroll/Scroll"

import List from "components/content/list/List"

export default {
  name: "Detail",
  components: {
    DetailNav,
    DetailHead,
    DetailComment,
    DetailParams,
    DetailFooter,
    
    Swiper,
    Scroll,

    List
  },
  // 混入
  mixins: [backTopMixin],
  data() {
    return {
      details: {},
      // 推荐商品数据
      detailData: [],
      // 记录组件距离顶部距离
      compOffsetops: null,
      deboundce: null,
      currentIndex: 0,
      show: false
    }
  },
  methods: {
    getData() {
      // 模拟请求数据
      return new Promise((res, rej) => {
        setTimeout(() => {
          res("success")
        }, 500);
      })
    },
    render() {
      for(let i = 0; i < 8; i ++){
        this.detailData.push({
          test: i
        })
      }
      this.$refs.scroll.refresh()
    },
    detailClick(index) {
      let {scrollerHeight} = this.$refs.scroll.scroll,
        windowHeight = window.innerHeight,
        y = this.compOffsetops[index]

        if(scrollerHeight - y <= windowHeight) {
          y = scrollerHeight - windowHeight + 44
        }

      this.$refs.scroll.scrollTo(0, -y, 400)
    },
    initOffsetY() {
      this.compOffsetops = []

      this.compOffsetops[0] = 0
      this.compOffsetops[1] = this.$refs.params.$el.offsetTop
      this.compOffsetops[2] = this.$refs.comment.$el.offsetTop
      this.compOffsetops[3] = this.$refs.list.$el.offsetTop

      // Haker
      this.compOffsetops[4] = Number.MAX_VALUE
    },
    imageLoad() {
      this.deboundce()
    },
    scroll(posi) {
      let compOffsetops = this.compOffsetops, 
        length = compOffsetops.length - 1,
        y = -posi.y,
        currentIndex = this.currentIndex


      // 判断导航条激活状态
      for(let i  = 0; i < length; i ++) {
        if(currentIndex !== i && y > compOffsetops[i] && y < compOffsetops[i + 1]) {
          this.currentIndex = this.$refs.detailNav.currentIndex = i;
        }
      }

      // 判断返回顶部按钮显示隐藏
      // 滚动距离超过 500 就显示
      this.isShow = -posi.y > 500

    },
    // 下拉加载数据
    pullingUp() {
      this.getData()
      .then(() => {
        this.render()
        // 准备下次下拉加载
        this.$refs.scroll.finishPullUp()
      })
    },
    // 加入购物车
    addCar() {
      // this.$store.commit("addGoods", {
      //   iid: this.$route.query.iid
      // })
      // actions
      this.$store.dispatch("addCar", {
        iid: this.$route.query.iid,
        price: this.$route.query.price,
        selected: true
      })

      this.$toast.show("添加购物车成功!", 1500)

    },
  },
  created() {
    this.details['test'] = this.$route.query.test
  },
  mounted() {
    // 防抖函数
    this.deboundce = shake(() => {
      // 初始化组件距离顶部距离
      this.initOffsetY()
    }, 100)

    // 请求数据
    this.getData()
      .then(() => {
        this.render()
      })
  }
}
</script>

<style lang="less" scoped>
#detail{

}

.main{
  height: calc(100vh - 94px);
  margin-top: 44px;
  position: relative;
  z-index: 9999;
  background-color: #fff;
  overflow: hidden;
}
</style>
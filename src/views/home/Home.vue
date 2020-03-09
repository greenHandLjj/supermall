<template>
  <div id="home">
    <!-- 导航条 -->
    <nav-bar background="#ff5777">
      <p>首页</p>
    </nav-bar>
    <!-- 首页切换 -->
    <tab-bar ref="controlNav2" :list="['推荐', '最新', '高人气']" @toggle="toggleList" class="fixed" v-show="isControlShow"/>

    <scroll class="scroll-wrap" ref="scroll" :probe-type="3" :pull-up-load="true" :is-click="true" @scroll="scroll" @pullingUp="pullingUp">
      <!-- banner -->
      <swiper />
      <!-- 分栏 -->
      <nav-tab></nav-tab>
      <!-- 推荐栏 -->
      <home-recommend @recommendLoad="recommendLoad" />
      <!-- 首页切换 -->
      <tab-bar ref="controlNav1" :list="['推荐', '最新', '高人气']"  @toggle="toggleList"/>
      <!-- 产品详情 -->
      <list :list="homeData"  />
    </scroll>

    <!-- 回到顶部 -->
    <back-top @click.native="backTop" v-show="isShow"></back-top>

  </div>
</template>

<script>
import HomeRecommend from "./children/HomeRecommend"
import NavTab from "./children/NavTab"

import NavBar from "components/common/navBar/NavBar"
import Swiper from "components/common/swiper/Swiper"
import Scroll from "components/common/scroll/Scroll"

import TabBar from "components/content/tabBar/TabBar"
import List from "components/content/list/List"


import {homeRequest} from "network/homeRequest"
import {shake} from "common/util"
import {backTopMixin} from "common/mixin"

export default {
  name: "Home",
  components: {
    HomeRecommend,
    NavTab,
    NavBar,
    Swiper,
    Scroll,
    TabBar,
    List
  },
  // 混入
  mixins: [backTopMixin],
  data() {
    return {
      // 请求来的数据
      homes: {
        recommend: {page: 0, list: []},
        news: {page: 0, list: []},
        hot: {page: 0, list: []}
      },
      // 标志
      sign: 1,
      // navbar的临界值， 抵达临界值后切换元素
      criticalY: 0,
      isControlShow: false,
      // 记录当前滚动距离
      scrollY: 0
    }
  },
  methods: {
    // ------------业务逻辑------------
    toggleList(index) {
      this.sign = index;

      this.$refs.controlNav2.currentIndex = this.$refs.controlNav1.currentIndex = index - 1;
    },
    // 当滚动时触发
    scroll(posi) {
      // 滚动距离超过 500 就显示
      this.isShow = -posi.y > 500

      // 当滚动到一定位置时显示control nav
      this.isControlShow = -posi.y >= this.criticalY - 44
    },
    // 当滚动到底部时触发
    pullingUp() {
      this.getData(this.getSignTxt)
        .then((data) => {
          // 视图发生变化，高度需要重新计算
          // 已经抽离到updated hook 中
          this.$refs.scroll.refresh()

          // 准备下一次上拉加载
          this.$refs.scroll.finishPullUp()
        })
    },
    // 推荐栏事件监听
    recommendLoad() {
      this.$refs.scroll.refresh()

      // 在图片加载完成后，再进行确定
      if(this.$refs.controlNav1) {
        this.criticalY = this.$refs.controlNav1.$el.offsetTop;
      }
    },
    // 通知scroll组件重新计算高度
    // ------------网络请求------------
    getData(type) {
      let txt;
      switch(type) {
        case 'recommend':
          txt = '推荐'
          break;
        case 'news':
          txt = '最新'
          break;
        case 'hot':
          txt = '高人气'
          break;
      }
      this.homes[type].page ++;

      // 假装有数据
      return new Promise((res, rej) => {
        // 伪造延迟
        setTimeout(() => {
          for(let i = 0; i < 8; i ++) {
            this.homes[type].list.push(
              {
                test: txt + i,
                iid: this.homes[type].list.length,
                price: ~~(Math.random() * 100)
              }
            )
          }
          res({status: 'scuuess'})
        }, 1000)

      })
    }
  },
  computed: {
    homeData() {
      let text = this.getSignTxt;
      
      return this.homes[text].list;
    },
    getSignTxt() {
      switch(this.sign){
        case 1:
          return "recommend";
        case 2:
          return "news";
        case 3:
          return "hot";
      }
    }
  },
  mounted() {
    let s1 = shake(this.$refs.scroll.refresh, 100)

    // 初始化页面数据
    this.getData('recommend').then(() => s1());
    this.getData('news');
    this.getData('hot');

  },
  // 路由处于激活状态 记录位置信息
  activated() {
    // 先刷新
    this.$refs.scroll.refresh()
    // 再滚动
    this.$refs.scroll.scrollTo(0, this.scrollY, 0)
  },
  // 失活
  deactivated() {
    this.scrollY = this.$refs.scroll.getScrollY()
  }
}
</script>

<style lang="less" scoped>
// #home{
//   padding: 44px 0 50px;
// }

.scroll-wrap{
  height: calc(100vh - 94px);
  margin-top: 44px;
  overflow: hidden;
}

.fixed{
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  z-index: 99;
}

</style>
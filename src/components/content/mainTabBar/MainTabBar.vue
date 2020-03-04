<template>
  <tab-bar id="tabBar">
    <tab-bar-item link="/home">
      <i class="iconfont icon-shouye"></i>
      <p>首页</p>
    </tab-bar-item>
    <tab-bar-item link="/category">
      <i class="iconfont icon-fenlei"></i>
      <p>分类</p>
    </tab-bar-item>
    <tab-bar-item link="/shopcar">
      <i class="iconfont icon-gouwuche-"></i>
      <p>购物车</p>
    </tab-bar-item>
    <tab-bar-item link="/profile">
      <i class="iconfont icon-xiangqing"></i>
      <p>个人</p>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabBar/TabBar'
import TabBarItem from 'components/common/tabBar/TabBarItem'

export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>
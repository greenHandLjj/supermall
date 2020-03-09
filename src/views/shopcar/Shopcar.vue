<template>
  <div id="shop-car">
    <!-- 导航条 -->
    <nav-bar background="#ff5777">
      <p>购物车({{totalGoodsLength}})</p>
    </nav-bar>

    <!-- main -->
    <scroll class="main" :is-click="true">
      <!-- 外层容器 -->
      <shop-car-list></shop-car-list>
    </scroll>

    <!-- 底部结算 -->
    <shop-car-footer></shop-car-footer>
    
  </div>
</template>

<script>
import ShopCarList from "./children/ShopCarList"
import ShopCarFooter from "./children/ShopCarFooter"

import NavBar from "components/common/navBar/NavBar"
import Scroll from "components/common/scroll/Scroll"

import {mapGetters} from "vuex"

export default {
  name: "Shopcar",
  components: {
    ShopCarList,
    ShopCarFooter,

    NavBar,
    Scroll
  },
  computed: {
    ...mapGetters(['totalGoodsLength'])
  },
  created() {
    
  },
  mounted() {

    
    // console.log(this.$store.state.shopCar)
  },
  activated() {
    
  }
}
</script>

<style lang="less" scoped>
#shop-car{
  
  .main{
    height: calc(100vh - 44px - 50px - 40px);
    margin-top: 44px;
  }
}
</style>
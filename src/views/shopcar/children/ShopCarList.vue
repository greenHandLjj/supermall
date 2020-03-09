<template>
  <div class="shop-car-list">
    <!-- 列表项 -->
    <shop-car-list-item v-for="(item, index) in list" :key="index" :goods="item"></shop-car-list-item>
  </div>
</template>

<script>
import ShopCarListItem from "./ShopCarListItem"

export default {
  name: "ShopCarList",
  components: {
    ShopCarListItem
  },
  data() {
    return {
      list: []
    }
  },
  created() {
    this.list = this.$store.state.shopCar
  }
}
</script>

<style lang="less" scoped>
.shop-car-list{

}
</style>
<template>
  <div class="shop-car-footer">
    <div class="select-all">
      <span>全选: </span>
      <select-btn :selected="selected" @change="change"></select-btn>
      <span class="total-price">总价格:{{totalPrice}}</span>
    </div>
    <div class="buy" @click="buy">
      立即结算({{selectedTotalGoods}})
    </div>
  </div>
</template>

<script>
import SelectBtn from "./SelectBtn"

import {mapGetters} from "vuex"

export default {
  name: "ShopCarFooter",
  components: {
    SelectBtn
  },
  methods: {
    change(select) {

      this.$store.state.shopCar.forEach(goods => {
        if(!select) { // 全选
          if(!goods.selected) {
            this.$store.commit("changeSelect", {
              iid: goods.iid
            })
          }

        }else{
          
          if(goods.selected) {
            this.$store.commit("changeSelect", {
              iid: goods.iid
            })
          }

        }

      });
    },
    buy() {
      if(this.selectedTotalGoods > 0) {
        // 执行购买
        this.$toast.show("购买成功！清空购物车", 1500)
        // 清空购物车
        this.$store.commit("clearShopCar")
      }else{
        // 弹出提示
        this.$toast.show("请先选择您想先要购买的商品!", 1500)
      }
    }
  },
  computed: {
    ...mapGetters(['selectedTotalGoods', 'totalPrice']),
    selected() {
      return this.selectedTotalGoods !== 0 && this.selectedTotalGoods === this.$store.state.shopCar.length
    }
  }
}
</script>

<style lang="less" scoped>
.shop-car-footer{
  background-color: #fff;
  height: 40px;
  box-shadow: 0px 0px 3px rgba(23, 23, 23, .3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  color: #232323;

  .select-all{
    display: flex;
    align-items: center;

    &>span{
      margin-left: 10px;
    }

    .total-price{
      color: #f40;
      margin-left: 10px;
    }

  }

  .buy{
    line-height: 40px;
    color: #fff;
    background-color: #f40;
    padding: 0 10px;
  }

}
</style>
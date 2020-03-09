<template>
  <div class="detail-footer">
    <div class="star">收藏</div>
    <div class="in">进入店铺</div>
    <div class="add" @click="addCar">加入购物车</div>
    <div class="buy">立即购买</div>
  </div>
</template>

<script>
export default {
  name: "DetailFooter",
  methods: {
    addCar() {
      this.$emit("addCar")
    }
  }
}
</script>

<style lang="less" scoped>
.detail-footer{
  height: 50px;
  background-color: #fff;
  position: relative;
  z-index: 9999;
  box-shadow: 0px 0px 3px rgba(23, 23, 23, .3);
  display: flex;
  
  div{
    line-height: 50px;
    font-size: 0.8rem;
    text-align: center;
    flex: 1;

    &:active{
      opacity: .6;
    }

    &.star{
      background-color: #f5f5f5;
      border-right: 1px solid #ccc;
    }
    &.in{
      background-color: #f5f5f5;
      margin-right: 20px;
    }

    &.add{
      background-color: #f10;
      color: #fff;
      padding: 0 10px;
    }

    &.buy{
      background-color: #f80;
      color: #fff;
      font-weight: bolder;
      padding: 0 10px;
    }
  }
}
</style>
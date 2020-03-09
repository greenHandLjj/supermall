<template>
  <div class="item">
    <div class="btn">
      <select-btn :selected="goods.selected" @change="change"></select-btn>
    </div>
    
    <div class="main">
      <div class="img"></div>
      <div class="txt">
        <p class="title">
          <span>商品 {{goods.iid}}</span>
          <span>￥{{goods.price}}</span>
        </p>
        <p class="desc">
          <span>这是个超棒的商品</span>
          <span>商品数量: {{goods.count}}</span>
        </p>
      </div>
    </div>

  </div>
</template>

<script>
import SelectBtn from "./SelectBtn"

export default {
  name: "ShopCarListItem",
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {

    }
  },
  components: {
    SelectBtn
  },
  methods: {
    change() {
      
      this.$store.commit("changeSelect", {
        iid: this.goods.iid
      })
      
    }
  }
}
</script>

<style lang="less" scoped>
.item{
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f8f8f8;
  &:not(:last-child){
    border-bottom: 1px solid #232323;
  }

  .main{
    flex: 1;
    display: flex;
    align-items: center;
    
    .img{
      width: 50px;
      height: 50px;
      border-radius: 5px;
      border: 1px solid #232323;
    }

    .txt{
      color: #232323;
      margin-left: 20px;
      font-size: 0.8rem;
      flex: 1;

      p{
        display: flex;
        justify-content: space-between;
      }

      .title{
        margin-bottom: 10px;
        color: #f40;
        font-weight: bolder;
        font-size: 0.9rem;
      }

    }
  }
}
</style>
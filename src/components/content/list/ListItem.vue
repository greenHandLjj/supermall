<template>
  <div class="item" @click="toDetail">
    <div class="img">
      <p>{{item.test}}</p>
      <p>id:{{item.iid}}</p>
    </div>
    <div class="text">
      <p class="old-price">
        原价
        <span>￥500</span>
      </p>
      <p class="price">￥340</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    toDetail() {
      this.$router.push({
        path: '/detail',
        query: {
          test: this.item.test,
          iid: this.item.iid,
          price: this.item.price
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.item{
  width: 45%;
  margin-top: 6px;
  padding: 4px;
  
  .img{
    height: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 5px;
    border: 1px solid var(--color-tint);
    p{
      margin: 5px 0;
    }
    img{
      width: 100%;
      object-fit: contain;
    }
  }

  .text{
    display: flex;
    margin-top: 4px;
    justify-content: space-between;
    font-size: 0.8rem;
    color: #232323;
    padding: 0 4px;

    .old-price{

      span{
        text-decoration: line-through;
        color: #aaa;
      }
    }

    .price{
      color: var(--color-height-text);
    }
  }
}
</style>
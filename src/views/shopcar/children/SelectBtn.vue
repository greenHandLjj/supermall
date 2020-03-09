<template>
  <div class="select" @click="change">
    <i class="iconfont icon-xuanzhong" :class="{selected: selected}"></i>
  </div>
</template>

<script>
export default {
  name: "SelectBtn",
  props: {
    // goods: {
    //   type: Object,
    //   default() {
    //     return {}
    //   }
    // }
    selected: {
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
      // isSelected: false
    }
  },
  methods: {
    change() {
      
      this.$emit('change', this.selected)
    }
  },
  computed: {
    // selected() {
      
    //   return item ? item.selected : false
    // }
  },
  // 初始化
  // created() {
  //   let item = this.$store.state.shopCar.find(item => item.iid === this.goods.iid)
  //   if(item) {
  //     this.isSelected = item.selected
  //   }
  // }
}
</script>

<style lang="less" scoped>
  .select{
    padding:0 10px;

    i{
      font-size: 1.3rem;
      color: #232323;

      &.selected{
        color: #f40 !important;
      }
    }
  }
</style>
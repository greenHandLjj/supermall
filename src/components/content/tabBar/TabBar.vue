<template>
  <div class="tab-bar">
    <div class="item" v-for="(item, index) in list" :key="index" @click="toggle(index)" :class="{active: currentIndex === index}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    toggle(index) {
      // 防止重复触发
      if(index === this.currentIndex) return;

      this.currentIndex = index;

      this.$emit('toggle', index + 1);
    }
  }
}
</script>

<style lang="less" scoped>
.tab-bar{
  display: flex;
  height: 44px;
  line-height: 44px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, .2);
  position: sticky;
  top: 44px;
  background-color: #fff;

  .item{
    flex:1;
    text-align: center;
    font-size: 0.8rem;
    color: #232323;

    span{
      padding: 0 4px 4px;
    }

    &.active span{
      border-bottom: 2px solid var(--color-tint);
      color: var(--color-height-text);
    } 

  }
}

</style>
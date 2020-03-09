<template>
  <div class="detail-nav">
    <nav-bar background="#fff">
      <i @click="back" slot="back" class="iconfont icon-tubiao-"></i>
      <div slot="default" class="detail-bar">
        <div v-for="(item, index) in lis" :key="item" class="detail-bar-item" :class="{active: index === currentIndex}" @click="toggle(index)">
          <p>{{item}}</p>
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar"

export default {
  name: "DetailNav",
  components: {
    NavBar
  },
  data() {
    return {
      lis: ["产品", "参数", "评价", "推荐"],
      currentIndex: 0
    }
  },
  methods: {
    back() {
      this.$router.back()
    },
    toggle(index) {
      this.currentIndex = index

      this.$emit("detailClick", index)
    }
  }
}
</script>

<style lang="less" scoped>
.detail-nav{
  position: relative;
  z-index: 9999;
  background-color: #fff;

  .iconfont {
    font-size: 1.6rem;
  }

  .detail-bar{
    display: flex;
    color: #232323;
    font-size: 0.9rem;
    text-align: center;
    flex: 1;

    .detail-bar-item{
      flex: 1;

      &.active{
        color: var(--color-height-text);
      }
    }
  }
}
</style>
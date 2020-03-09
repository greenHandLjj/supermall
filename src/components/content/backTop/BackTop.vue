<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: "BackTop"
}
</script>

<style lang="less" scoped>
.back-top{
  position: fixed;
  bottom: 60px;
  right: 8px;
  z-index: 9999;

  img {
    width: 43px;
  }
}
</style>
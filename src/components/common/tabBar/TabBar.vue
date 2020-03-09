<template>
  <div id="tabBar" v-if="isShow">
    <slot />
  </div>
</template>

<script>
import TabBarItem from './TabBarItem'

export default {
  name: "TabBar",
  components: {
    TabBarItem
  },
  data() {
    return {
      isShow: true
    }
  }
}
</script>

<style lang="less" scoped>
#tabBar{
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f5f5f5;
  z-index: 999;
  height: 50px;
  box-shadow: 0px 0px 6px rgba(23, 23, 23, .3);
}
</style>
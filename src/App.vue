<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>

    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  import MainTabBar from "components/content/mainTabBar/MainTabBar"
  export default {
    name: "App",
    components: {
      MainTabBar
    }
  }
</script>

<style lang="less">
@import 'assets/css/base';
// 字体图标库
@import '//at.alicdn.com/t/font_1670452_sdd1i2r3jss.css';

</style>

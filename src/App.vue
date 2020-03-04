<template>
  <div id="app">
    <router-view></router-view>

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
@import '//at.alicdn.com/t/font_1670452_0r38mv4lx9xd.css';

</style>

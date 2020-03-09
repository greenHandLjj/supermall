<template>
  <div id="profile">
    <!-- 导航条 -->
    <nav-bar background="#5882fb">
      <p>个人中心</p>
    </nav-bar>
    
    <scroll class="main">
      <!-- 头部界面 -->
      <profile-head></profile-head>
      <!-- list-item -->
      <profile-list></profile-list>
    </scroll>

  </div>
</template>

<script>
import ProfileHead from "./children/ProfileHead"
import ProfileList from "./children/ProfileList"

import NavBar from "components/common/navBar/NavBar"
import Scroll from "components/common/scroll/Scroll"

export default {
  name: "Profile",
  components: {
    ProfileHead,
    ProfileList,

    NavBar,
    Scroll
  }
}
</script>

<style lang="less" scoped>

.main{
  height: calc(100vh - 44px - 50px);
  margin-top: 44px;
  overflow: hidden;
}
</style>
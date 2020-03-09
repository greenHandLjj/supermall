<template>
  <div class="list">
    <profile-options class="options">
      <i slot="icon" class="iconfont icon-qicheqianlian-"></i>
      <p slot="text">购物车</p>
    </profile-options>

    <profile-options class="options">
      <i slot="icon" class="iconfont icon-wodejifen"></i>
      <p slot="text">我的积分</p>
    </profile-options>

    <br>

    <profile-options class="options">
      <i slot="icon" class="iconfont icon-kefu"></i>
      <p slot="text">我的客服</p>
    </profile-options>

    <br>

    <profile-options class="options">
      <i slot="icon" class="iconfont icon-ziyuan"></i>
      <p slot="text">设置</p>
    </profile-options>
    
  </div>
</template>

<script>
import ProfileOptions from "./ProfileOptions"

export default {
  name: "ProfileList",
  components: {
    ProfileOptions
  }
}
</script>

<style lang="less" scoped>
.list{

  .options{
    border-bottom: 1px solid rgba(0, 0, 0, .2);
  }
}
</style>
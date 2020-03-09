<template>
  <div class="profile-head">
    <div class="user-info">
      <div class="head"></div>
      <div class="info">
        <p>未登录</p>
        <p>抓住优惠，嗨翻购物</p>
      </div>
    </div>

    <div class="more">
      <i class="iconfont icon-tubiao-1"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileHead",
}
</script>

<style lang="less" scoped>
.profile-head{
  height: 150px;
  // background-color: aqua;
  background: url("~assets/img/profile/bg.jpeg") no-repeat center / cover;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
  box-shadow: 0px 0px 3px rgba(23, 23, 23, .5);
 
  .user-info{
    display: flex;
    align-items: center;

    .head{
      width: 50px;
      height: 50px;
      border-radius: 5px;
      border: 1px solid #fff;
      margin-right: 10px;
    }
    .info{
      p{
        color: #fff;
        font-size: 0.9rem;
        margin: 10px 0;

        &:first-child{
          font-weight: bolder;
        }
      }
    }
  }

  .more{

    i{
      font-size: 1.5rem;
      color: #fff;
    }
  }
}
</style>
<template>
  <div id="nav-bar" :style="{backgroundColor: background}">
    <div class="back">
      <slot name="back" />
    </div>
    <div class="main">
      <slot name="default" />
    </div>
    <div class="info">
      <slot name="info" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    background: {
      type: String,
      default: "#f5f5f5"
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="less">
#nav-bar{
  height: 44px;
  display: flex;
  line-height: 44px;
  font-size: 0.9rem;
  box-sizing: border-box;
  box-shadow: 0px 0px 6px rgba(23, 23, 23, .3);
  padding: 4px;

  &>div{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .main{
    flex: 1;
    color: #fff;
  }
  .back, .info{
    width: 60px;
  }
}
</style>
<template>
  <div class="options">
    <div class="icon">
      <slot name="icon" />
    </div>
    <div class="text">
      <slot name="text" />
    </div>
    <div class="jiantou">
      <i class="iconfont icon-tubiao-1"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileOptions",
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.options{
  display: flex;
  padding: 10px;
  background-color: #f5f5f5;
  align-items: center;
  
  .icon{
    margin-right: 10px;    
  }

  .text{
    font-size: .8rem;
    color: #232323;
    flex: 1;
  }

  .jiantou{
    font-size: 1.3rem;
    color: #232323;
  }

}
</style>
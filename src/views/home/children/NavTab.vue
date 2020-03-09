<template>
  <div class="nav-tab">
    <div class="item">
      <div class="img"></div>
      <p>A</p>
    </div>
    <div class="item">
      <div class="img"></div>
      <p>B</p>
    </div>
    <div class="item">
      <div class="img"></div>
      <p>C</p>
    </div>
    <div class="item">
      <div class="img"></div>
      <p>D</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavTab"
}
</script>

<style lang="less" scoped>
.nav-tab{
  height: 100px;
  display: flex;
  background-color: #f5f5f5;
  
  .item{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // align-items: center;
    padding: 10px;
    text-align: center;

    &:nth-child(1) .img {
      background-color: antiquewhite;
    }

    &:nth-child(2) .img {
      background-color: thistle;
    }

    &:nth-child(3) .img {
      background-color: yellowgreen;
    }

    &:nth-child(4) .img {
      background-color: palegreen;
    }

    .img{
      height: 70px;
      border-radius: 5px;
      border: 1px solid rgba(23, 23, 23, .5);
    }

    p{
      font-size: 0.9rem;
      color: #232323;
      margin-top: 5px;
    }
  }
}
</style>
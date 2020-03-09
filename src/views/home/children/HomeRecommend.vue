<template>
  <div class="recommend">
    <img @load="imageLoad" src="~assets/img/home/recommend_bg.jpg" alt="">
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  methods: {
    imageLoad() {
      this.$emit('recommendLoad')
    }
  }
}
</script>

<style lang="less">
.recommend{ 
  border-bottom: 6px solid #f5f5f5;
  text-align: center;
  font-size: 0;
  border-left: 1px solid #232323;

  img{
    width: 100%;
  }
}
</style>
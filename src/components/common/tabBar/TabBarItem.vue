<template>
  <div class="item" :class="{active: isActive}" @click="navigateTo">
    <slot />
  </div>
</template>

<script>
export default {
  naem: 'TabBarItem',
  props: {
    link: String
  },
  data() {
    return {
      // isActive: false
    }
  },
  methods: {
    navigateTo() {
      this.$router.replace(this.link)
    }
  },
  computed: {
    isActive() {
      let route = this.$route.matched[0];
      if(route) {
        if(route.path.indexOf(this.link) >= 0) {
          return true
        }
      }
      return false;
    }
  }
}
</script>

<style lang="less" scoped>
.item{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    color: #232323;

  .iconfont{
    font-size: 1.3rem;
    margin-bottom: 0.2rem;
  }

  p{
    font-size: 0.8rem;
  }

  &.active{
    color: #ff5777
  }
}

</style>
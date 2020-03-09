<template>
  <div id="toast" v-if="isShow">
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      isShow: false,
      message: null,
      timer: null
    }
  },
  methods: {
    show(message = "提示信息", delay = 2000) {
      this.isShow = true
      this.message = message

      clearTimeout(this.timer)

      this.timer = setTimeout(() => {
          this.isShow = false
        }, delay)
    }
  }
}
</script>

<style lang="less" scoped>
#toast{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  background-color: rgba(0, 0, 0, .7);
  z-index: 9999;
  border-radius: 4px;
  box-shadow: 2px 2px 3px rgab(0, 0, 0, .5);

  p{
    font-size: 0.9rem;
    white-space: nowrap;
    color: #fff;
  }
}
</style>
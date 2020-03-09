<template>
  <div class="swiper">

    <div class="contain" ref="contain">

      <div class="moveBox" :style="{transform: translateX}">
        <div class="item" v-for="(item, index) of banners" :key="index">
          <p>{{item.id}} </p>
        </div>
      </div>

    </div>
    
    <!-- 指示器 -->
    <div class="indicator">
      
      <div class="item" :class="{active: currentIndex === index}" v-for="(item, index) of banners" :key="index"></div>
    </div>
  </div>
</template>

<script>


export default {
  props: {
      // 列表数据
      banners: {
        type: Array,
        default() {
          return [{id: 0}, {id: 1}, {id: 2}]
        }
      },
      // 延迟
      delay: {
        type: Number,
        default: 1000
      },
      // 自动播放
      autoLoop: {
        type: Boolean,
        default: true
      }
  },
  data() {
    return {
      // 移动距离
      moveWidth: 0,
      // 最大index值
      maxIndex: this.banners.length - 1,
      currentIndex: 0,
      timer: null,
      moveX: 0
    }
  },
  methods: {
    // 当手指触摸
    touchstart(e) {
      let currentTarget = e.currentTarget,
        downX = e.touches[0].clientX;

      clearInterval(this.timer)
      
      currentTarget.ontouchmove = (e) => {
        let moveX = e.touches[0].clientX

        this.translateX = downX - moveX
      }

      currentTarget.ontouchend = () => {

        if(this.moveX > 0 && this.moveX > 50){
          

        }

        this.moveX = 0
        currentTarget.ontouchmove = currentTarget.ontouchend = null
        this.loop()
      }
      
    },
    loop() {

      clearInterval(this.timer)

      this.timer = setInterval(() => {

        this.changeIndex(1)

      }, this.delay)

    },
    changeIndex(n) {
      
      if(this.currentIndex < this.maxIndex) {
        this.currentIndex += n
      }else{
        this.currentIndex = 0
      }
    }
  },
  mounted() {
    // 初始化移动距离
    this.moveWidth = this.$refs.contain.clientWidth
    // console.log(this.$refs)

    this.loop();
  },
  computed: {
    translateX: {
      get() {
        return "translateX(-" + (this.currentIndex * this.moveWidth + this.moveX) + "px)"
      },
      set(moveX) {
        // console.log(moveX)
        this.moveX = moveX
      }
    }
  }
}
</script>

<style lang="less">
body{
  margin: 0;
}
.swiper{
  position: relative;
  height: 200px;
  overflow: hidden;
  background-color: #f5fff5;

  .contain{
    position: relative;
    width: 100%;
    height: 100%;
    
    .moveBox{
      display: flex;
      height: 100%;
      flex-wrap: nowrap;
      transition: all .5s;

      .item{
        width: 100%;
        height: 100%;
        flex: none;
        box-sizing: border-box;
        font-size: 18px;
        text-align: center;
        line-height: 200px;
      }

    }
  }

  .indicator{
    position: absolute;
    width: 100%;
    bottom: 10px;
    text-align: center;
    font-size: 0;

    .item{
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #000;
      margin: 0 5px;

      &.active{
        background-color: red;
      }
    }
  }
}
</style>
<template>
  <div id="profile">
    <!-- 导航条 -->
    <nav-bar background="rgba(111, 57, 255, 0.3)">
      <p>分类</p>
    </nav-bar>
    
    <div class="main">
      <aside-list @getData="getData" class="aside"></aside-list>

      <scroll ref="scroll" class="profile-main">
        <category-list :info="list[currentIndex]"></category-list>
      </scroll>
    </div>

  </div>
</template>

<script>
import AsideList from "./children/AsideList"
import CategoryList from "./children/CategoryList"

import NavBar from "components/common/navBar/NavBar"
import Scroll from "components/common/scroll/Scroll"

export default {
  name: "Profile",
  components: {
    AsideList,
    CategoryList,
    
    NavBar,
    Scroll
  },
  data() {
    return {
      list: [],
      currentIndex: 0
    }
  },
  methods: {
    getData(index) {
      let arr = [];

      for(let i = 0; i < ~~(Math.random() * 20) + 10; i ++) {
        arr.push({
          num: i
        })
      }
      // 赋值
      this.currentIndex = index
      this.list[index] = {
        id: index,
        datas: arr
      }
      // this.list.splice(index, 1, {
      //   id: index,
      //   datas: arr
      // })
      this.$refs.scroll && this.$refs.scroll.refresh()
    }
  },
  created() {
    for(let i = 0;i < 7; i ++) {
      this.list.push({})
    }

    // 初始化数据
    this.getData(0)
  }
}
</script>

<style lang="less" scoped>
.main{
  height: calc(100vh - 44px - 50px);
  margin-top: 44px;
  display: flex;
  overflow: hidden;

  .aside{
    width: 80px;
  }

  .profile-main{
    height: 100%;
    flex: 1;
    overflow: hidden;
  }
}
</style>
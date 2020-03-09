<template>
  <div class="aside-list">
    <aside-list-item @toggle="toggle" class="aside-list-item" :class="{active: currentIndex === index}" v-for="(item, index) in list" :key="index" :info="item"></aside-list-item>
  </div>
</template>

<script>
import AsideListItem from "./AsideListItem"

export default {
  name: "AsideList",
  data() {
    return {
      list: [
        {id: 0, txt: "选项1"},
        {id: 1, txt: "选项2"},
        {id: 2, txt: "选项3"},
        {id: 3, txt: "选项4"},
        {id: 4, txt: "选项5"},
        {id: 5, txt: "选项6"},
        {id: 6, txt: "选项7"}
      ],
      currentIndex: 0
    }
  },
  components: {
    AsideListItem
  },
  methods: {
    toggle(index) {
      if(index === this.currentIndex) return

      this.currentIndex = index;

      this.$emit("getData", index)
    }
  }
}
</script>

<style lang="less" scoped>
.aside-list{
  box-shadow: 1px 0px 3px rgba(23, 23, 23, .5);

  .aside-list-item:not(:last-child){
    border-bottom: 1px solid rgba(0, 0, 0, .3);
  }
}
</style>
<template>
  <div class="category-list">
    <category-list-item class="category-list-item" v-for="(item, index) in info.datas" :key="index" :data="item"></category-list-item>
  </div>
</template>

<script>
import CategoryListItem from "./CategoryListItem"

export default {
  name: "CategoryList",
  components: {
    CategoryListItem
  },
  props: {
    info: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
.category-list{
  display: flex;
  flex-wrap: wrap;
  
  .category-list-item{
    box-sizing: border-box;
    width: 50%;
    height: 100px;
  }
}
</style>
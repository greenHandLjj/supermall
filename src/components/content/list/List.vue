<template>
  <div id="list">
    <list-item v-for="(item, index) in list" :item="item" :key="index" />
  </div>
</template>

<script>
import ListItem from "./ListItem"
export default {
  name: "List",
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    ListItem
  }
}
</script>

<style>
#list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 5px 0;
}
</style>
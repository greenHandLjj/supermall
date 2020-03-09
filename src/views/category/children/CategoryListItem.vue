<template>
  <div class="item">
    <div class="content">
      {{data.num}}
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryListItem",
  props: {
    data: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
.item{
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #f5f5f5;
}
</style>
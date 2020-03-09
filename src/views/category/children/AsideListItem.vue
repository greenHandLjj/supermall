<template>
  <div class="item" @click="toggle">
    <p :class="{active: isActive}">
      {{info.txt}}
    </p>
  </div>
</template>

<script>
export default {
  name: "AsdieListItem",
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
      isActive: false
    }
  },
  methods: {
    toggle(){
      
      this.$emit("toggle", this.info.id)
    }
  }
}
</script>

<style lang="less" scoped>
.item{

  &.active{
    p{
      color: var(--color-height-text);
    }
  }
  
  p{
    padding: 10px;
    background-color: #f5f5f5;
    text-align: center;
    color: #232323;
    font-size: .9rem;

  }
}
</style>
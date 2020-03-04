<template>
  <div>
    <nav-bar background="#ff5777">
      <p>首页</p>
    </nav-bar>

  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar"
import {homeRequest} from "network/homeRequest"

export default {
  name: "Home",
  components: {
    NavBar
  },
  mounted() {

    homeRequest().then(data => {
      console.log(data)
    }, err => {

    })

  }
}
</script>

<style lang="less">

</style>
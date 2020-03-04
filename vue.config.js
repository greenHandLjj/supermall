
module.exports = {
  configureWebpack: {
    resolve: {
      // extensions: ['.css'],
      alias: {
        // 配置别名
        "assets": "@/assets",
        "common": "@/common",
        "components": "@/components",
        "views": "@/views",
        "network": "@/network"
      }
    }
  }
}
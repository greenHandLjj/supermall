# supermall

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 项目目录结构
  assets
    |—————— img
    |—————— css
  components
    |—————— common  (常用，可脱离项目单独存在)
    |—————— content (只跟当前项目的业务相关，不需要与其他项目复用)
  router    / vue-router
    |
  stroe     / vuex
    |
  views     / 视图相关代码
    |
  common    / (全局常量，工具类)

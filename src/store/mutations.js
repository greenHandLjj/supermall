
export default {
  // 加入购物车
  addGoods(state, goods) {
    state.shopCar.push(goods)
  },
  // 数量增加
  goodsCountAdd(state, goods) {
    
    state.shopCar.find(element => {
      if(goods.iid === element.iid) {
        element.count ++
      }
    });
  },
  // 改变选中状态
  changeSelect(state, goods) {
    
    state.shopCar.find(item => {
      if(item.iid === goods.iid){
        item.selected = !item.selected
      }
    })

  },
  // 清空购物车
  clearShopCar(state) {
    state.shopCar.splice(0)
  }
}

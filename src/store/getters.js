
export default {
  totalGoodsLength(state) {
    return state.shopCar.length
  },
  selectedTotalGoods(state) {
    return state.shopCar.filter(item => item.selected).length
  },
  totalPrice(state) {
    return state.shopCar.filter(item => item.selected).reduce((prev, next) => {
      return next.price * next.count + prev
    }, 0)
  }
}

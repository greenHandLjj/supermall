
export default {
  addCar(context, good) {
    let {state} = context,
      shopCar = state.shopCar,
      flag = false
    
    shopCar.find(item => {
      if(item.iid === good.iid) {
        return flag = true;
      }
    })

    if( flag ) {
      context.commit("goodsCountAdd", good)
    }else{
      good.count = 1
      
      context.commit("addGoods", good)
    }
  }
}

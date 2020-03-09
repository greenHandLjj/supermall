
// 防抖函数
export let shake = (func, delay) => {
  let timer = null;
  return () => {
    clearTimeout(timer)
    timer = setTimeout((...args) => {
      func.apply(this, args)
    }, delay);
  }
}

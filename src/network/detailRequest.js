import rq from "./request"

export function request() {
  let config = {
    url: '/detail/iid'
  }

  return rq(config)
}
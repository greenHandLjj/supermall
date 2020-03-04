import requset from "./request"

export function homeRequest() {
  let config = {
    url: '/home/data'
  }

  return requset(config)
}
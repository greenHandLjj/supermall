import axios from "axios"

const instance1 = axios.create({
  baseURL: "http://106.54.54.237:8000/api/hy",
  timeout: 5000
})

export default function requset(config) {

  return instance1(config)
}
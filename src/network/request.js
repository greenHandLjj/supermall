import axios from "axios"

const instance1 = axios.create({
  baseURL: "http://123.207.32.32:8000",
  timeout: 5000
})

export default function requset(config) {

  return instance1(config)
}
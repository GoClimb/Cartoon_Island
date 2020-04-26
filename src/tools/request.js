import axios from 'axios'
import { Notify } from 'vant'

const instance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 8000
})

instance.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

instance.interceptors.response.use(response => {
  const res = response.data
  if (res.code !== 200) {
    Notify(res.code_msg)
    return Promise.reject(new Error(res.code_msg))
  }
  return response.data
}, error => {
  console.log(error)
  Notify('网络异常,请稍后再试')
})

export default instance

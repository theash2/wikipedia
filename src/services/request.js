import axios from 'axios'
import router from "@/router";
import { LOGIN } from './urls';
export function request(config) {
  // 创建axios的实例
  const instance = axios.create({
    baseURL: LOGIN,
    timeout: 10000
  })
  // 请求拦截器配置
  instance.interceptors.request.use(config => {
      return config
    }, error => {
      console.log(error)
      return Promise.error(error)
    }
  )
  // 响应拦截器配置
  instance.interceptors.response.use(response => {
    console.log(response)
    return response.data
  }, error => {
    switch (error.response.status) {
      case 404:
        console.log("为成功访问道服务器")
        router.push({path: '/404'})
        break
      default:
        return Promise.reject(error)
    }
    return Promise.reject(error)
  })
  // 发送真正的网络请求
  return instance(config);
}
export default request
import axios from 'axios'

// 最终封装
export function request(config) {
  // 创建axios实例
  const instance = axios.create({
    // baseURL: 'http://123.207.32.32:8000',
    // resolve 122.152.220.151
    baseURL: 'http://mall.kirakirazone.com',
    timeout: 5000
  })

  // 添加请求拦截器
  instance.interceptors.request.use(config => {
  //   如果拦截了,不return回去,则不能继续请求了
    return config
  }, err => {
    // console.log(err)
  })

  // 响应拦截器
  instance.interceptors.response.use(res => {
    //   如果拦截了, 则会包含http状态码等信息,如果只要得到请求获取的数据, 则返回res.data
    return res.data
  }, err => {
  })
  return instance(config)
}

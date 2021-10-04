import axios from 'axios'

// 如果这里写default,则只会导出一个, 所以不能写default
export function request(config, successfunc, faildfunc) {
// 1. 创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  instance(config)
    .then(res => {
      successfunc(res)
    })
    .catch(err => {
      faildfunc(err)
    })
}


// 如果这里写default,则只会导出一个, 所以不能写default
export function request1(config) {
  return new Promise((resolve, reject) => {
    // 1. 创建axios实例
    const instance = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000
    })

    instance(config)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })

}

// 最终封装
export function request_final(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 添加请求拦截器
  instance.interceptors.request.use(config => {
    console.log('拦截请求内容')
    console.log(config);
  //   如果拦截了,不return回去,则不能继续请求了
    return config
  }, err => {
    console.log(err)
  })

  // 响应拦截器
  instance.interceptors.response.use(res => {
    console.log('拦截响应内容')
    console.log(res);
    //   如果拦截了, 则会包含http状态码等信息,如果只要得到请求获取的数据, 则返回res.data
    return res.data
  }, err => {
    console.log(err)
  })
  return instance(config)

}

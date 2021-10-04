// 对home的request再次封装, 全部写这里面
import {request} from './request'

export function getHomeMultidata() {
  return request({
    url: 'home/multidata'
  })

}

// 首页流行最新等数据接口请求
export function getHomeGoods(type, page) {
  return request({
    url: 'api/wh/home/data',
    params: {
      type,
      page
    }
  })

}
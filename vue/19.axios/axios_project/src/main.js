import Vue from 'vue'
import App from './App'
import axios from 'axios'

Vue.config.productionTip = false

/*
// 使用全局的方式创建axios

new Vue({
  el: '#app',
  render: h => h(App)
})

// 配置全局axios属性
axios.defaults.baseURL = 'http://123.207.32.32:8000'

// ms级别
axios.defaults.timeout = 5000

// 传入对象类型
axios({
  url: 'http://123.207.32.32:8000/home/multidata',
//  使用method指定何种请求方式
  method: 'get'
}).then(res => {
  console.log(res)
})


axios({
  url: 'http://123.207.32.32:8000/api/hy/home/data',
// 将params参数独立
  params: {
    type: 'sell',
    page: '3'
  },
  method: 'get'
}).then(res => {
  console.log(res)
})


// 2. axios并发请求
// 调用all方法,和promise很像
axios.all([
  axios({
    url: 'http://123.207.32.32:8000/home/multidata'
  }),

  axios({
    url: 'http://123.207.32.32:8000/api/hy/home/data',
    params: {
      type: 'sell',
      page: '3'
    },
  })
]).then(res => {
  console.log(res)
})



// 将请求结果进行展开
axios.all([
  axios({
    url: 'http://123.207.32.32:8000/home/multidata'
  }), axios({
    url: 'http://123.207.32.32:8000/api/hy/home/data',
    params: {
      type: 'sell',
      page: '3'
    },
  })
]).then(axios.spread((res1, res2) => {
  console.log(res1);
  console.log(res2)

}))


// 使用全局配置进行请求
axios({
  url: '/home/multidata',
//  使用method指定何种请求方式
  method: 'get'
}).then(res => {
  console.log('我是全局配置')
  console.log(res)
})

 */


/*
// 使用实例的方式创建axios

const instance1 = axios.create({
  baseURL: 'http://123.207.32.32:8000',
  timetout: 5000
})

instance1({
  url: '/home/multidata',
  params: {
    type: 'sell',
    page: '3'
  },
}).then(res => {
  console.log(res)
})

*/

// 调用自己封装的函数
import {request} from './network/request'

request({
    url: '/home/multidata',
    params: {
      type: 'sell',
      page: '3'
    },
  },
  res => {
    console.log('函数回调')
    console.log(res)
  }, err => {
    console.log(err)
  })


import {request1} from './network/request'

request1({
  url: '/home/multidata',
  params: {
    type: 'sell',
    page: '3'
  },
}).then(res => {
  console.log('Promise')
  console.log(res)
}).catch(err => {
  console.log(err)
})

// 最终封装
import {request_final} from './network/request'

request_final({
  url: '/home/multidata',
  params: {
    type: 'sell',
    page: '3'
  },
}).then(res => {
  console.log('最终封装')
  console.log(res)
}).catch(err => {
  console.log(err)
})


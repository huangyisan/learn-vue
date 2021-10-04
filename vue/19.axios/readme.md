## 安装axios框架
```
npm install axios --save
```

## 简单使用axios

```
axios({
  url: 'http://123.207.32.32:8000/home/multidata',
  method: 'get'
}).then(res => {
  console.log(res)
})
```

## 并发请求

```
使用axios.all([]), 可以放入多个请求的数组
```

## 将请求结果展开

```
axios.spread(res1, res2 => {
  console.log(res1)
  console.log(res2)
})
```

## 全局配置提取

1. 使用axios的全局配置
  * `axios.defaults.baseUrl = '192.168.1.1'`
  * `axios.defaults.headers.post['Content-Type'] = application/x-www-form-urlencoded`

2. 常见的配置选项
  * https://github.com/axios/axios#request-config


## axios的实例
1. 当我们从axios模块中导入对象时, 使用的实例是默认的实例.
2. 当给该实例设置一些默认配置时, 这些配置就被固定下来了.
3. 但是后续开发中,某些配置可能不太一样.
4. 比如某些请求需要配使用的特定的baseURL或者timeout或者content-Type等.
5. 这个时候, 我们就可以创建新的实例, 并且传入属于该实例的配置信息.


## 正确的姿势使用第三方组件
1. 不要直接使用第三方组件, 如果自己项目多出引用, 若有一天第三方组件换了, 改了, 自己需要挨个去修改.
2. 正确的姿势是自己对第三方组件进行简单封装, 然后需要引用的地方, 引用自己封装好的组件, 如果遇到第三方组件修改的情况, 只需要修改自己封装的组件即可.

## axios拦截器
1. 拦截请求成功和失败
2. 拦截响应成功和失败

### 拦截器拿来做什么
1. 如果传入的config不符合服务器要求, 需要对config的内容进行处理后,再传给服务器. 比如添加一些header.
2. 每次发送的时候, 添加一个请求的图标(转圈标志)
3. 某些网络请求, 比如登陆, 必须携带一些特殊信息.
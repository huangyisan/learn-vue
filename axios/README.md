1. axios调用的返回值是Promise实例.
2. 成功的值叫response, 失败的值叫error.
3. axios成功的值是一个axios封装的response对象,服务器返回的真正数据在response.data中.
4. 携带query参数,编写的配置项,叫做params.
5. post请求以data方式,默认为json编码.
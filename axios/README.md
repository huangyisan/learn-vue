1. axios调用的返回值是Promise实例.
2. 成功的值叫response, 失败的值叫error.
3. axios成功的值是一个axios封装的response对象,服务器返回的真正数据在response.data中.
4. 携带query参数,编写的配置项,叫做params.
5. post请求以data方式,默认为json编码.
6. 携带params参数时, 就需要自己手动拼在url中.
7. axios.defaults.xxx 可以配置全局属性.
8. axios.create可以创建一个新的axios,同时赋予基础属性, 新的axios没有取消请求和批量发送请求的方法
9. 使用axios.all批量发送请求
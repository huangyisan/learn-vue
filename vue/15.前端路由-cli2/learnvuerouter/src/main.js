import Vue from 'vue'
import App from './App'

// 将router导入, 如果from后面写一个目录,则会自动找找个目录下的index文件
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

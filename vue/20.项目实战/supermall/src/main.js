import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// 定义$bus的原型, 用来给事件总线使用
Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

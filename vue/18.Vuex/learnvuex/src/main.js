import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// Vue的原型,则任何对象都会有$store,且赋值为store对象. 任何对象都可以通过$store来使用
Vue.prototype.$store = store

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

import Vue from 'vue'
import Vuex from 'vuex'

// 安装插件
Vue.use(Vuex)

// 创建modules模块

const moduleA = {
  state: {
    name: 'zhangsan'
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload
    }
  },
  // actions的context.commit只会操作自己的store,不会操作root的store
  actions: {
    mUpdateName(context) {
      setTimeout(() => {
        context.commit('updateName', 'wangwu')
      },1000)
    }
  },
  getters: {
    fullname(state) {
      return state.name + '111'
    },
    fullname2(state, getters) {
      return getters.fullname + '2222'
    },
  //  从mudule里面引入主store中的属性
    fullname3(state, getters, rootState) {
      return getters.fullname2 + rootState.counter
    },

  },
}


const moduleB = {
  state: {},
  mutations: {},
  actions: {},
  getters: {},
}


// 创建对象, 创建的是Vuex里面的Store属性
const store = new Vuex.Store({
  // 保存状态,比如登陆状态等
  state: {
    counter: 1000,
    students: [
      {name: 'yisan', age: '29'},
      {name: 'yisan1', age: '19'},
      {name: 'yisan2', age: '18'},
      {name: 'yisan3', age: '33'},
    ],
    info: {name: 'yisan'}
  },
  // 同步操作执行
  mutations: {
    //  方法 通过mutations修改state
    increment(state) {
      state.counter++
    },
    // 事件类型,decrement
    decrement(state) {
      // 回调函数
      state.counter--
    },
    // 1. 普通提交风格
    addFive(state, count) {
      state.counter += count
    },

    // 2.特殊提交风格
    addFiveSpe(state, payload) {
      state.counter += payload.count
    },

    //  对象的添加
    ['ADDSTUDENT'](state, obj) {
      state.students.push(obj)
    },
    updateInfo(state) {
      // 同步通讯方式
      state.info.name = 'huang'
    },
  },
  //异步操作执行, 发送网络请求等情况
  actions: {
    // 默认参数为 context
    // 下面是带回调的异步方法,如果不需要回调,则去掉promise方式即可
    aUpdateInfo(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // commit里面传入 mutation的事件
          // context.commit('updateInfo')

          // 传参情况
          context.commit('updateInfo', payload)
          console.log(payload)
          //   回调信息
          resolve(console.log('我是正确执行的回调信息'))
        }, 1000)
      })
    }
  },
  // 获取变化后的state数据
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    //  带参数的getters, getters的函数不能传递参数,所以在返回的时候返回函数,让里面的函数来接受参数
    moreAgeStu(state) {
      return function (age) {
        return state.students.filter(s => s.age > age)
      }
    }
  },

  //
  modules: {
    moduleA,
    moduleB
  }
})

// 导出store对象

export default store

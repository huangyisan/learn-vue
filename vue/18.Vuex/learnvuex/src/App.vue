<template>
  <div id="app">
    <h2>演示modules里面的内容</h2>
    <!--从state里面拿moduleA-->
    <h2>{{$store.state.moduleA.name}}</h2>
    <button @click="updateName('lisi')">修改muduleA里面的name信息</button>
    <h2>{{$store.getters.fullname}}</h2>
    <h2>{{$store.getters.fullname2}}</h2>
    <!-- 从主store获取数据进行拼接-->
    <h2>{{$store.getters.fullname3}}</h2>
    <!--action异步-->
    <button @click="mUpdateName">异步修改muduleA里面的name信息</button>
    <h2>修改student属性</h2>
    <button @click="updateInfo">修改student信息</button>
    <button @click="aUpdateInfo">异步方式修改student信息</button>
    <h2>{{$store.state.info.name}}</h2>
    <h2>{{message}}</h2>
    <!-- 使用 $store的方式访问vuex中state对象中的counter属性-->
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <!--传参的方式更新数据-->
    <button @click="addFive(5)">+5</button>
    <!--特殊提交方式-->
    <button @click="addFiveSpe(10)">特殊方式+10</button>
    <!-- 提交student对象-->
    <h2>添加一个学生</h2>
    <button @click="ADDSTUDENT({name:'X', age:41})">添加一个学生</button>


    <h2>getters相关内容</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.moreAgeStu(20)}}</h2>

    <h2>hellow vuex内容</h2>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
  import HelloVuex from './components/HelloVuex'

  import {
    ADDSTUDENT
  } from './store/mutation-types'

  export default {
    name: 'App',
    data() {
      return {
        message: 'hello world',
        counter: 0
      }
    },
    components: {
      HelloVuex: HelloVuex

    },
    // 通过methods提交到mutations
    methods: {
      addition() {
        // 通过commit方法进行提交,传入的参数是在mutations中定义好的方法名称
        this.$store.commit('increment')

      },
      subtraction() {
        this.$store.commit('decrement')
      },

      // 1. 普通提交风格
      addFive(count) {
        this.$store.commit('addFive', count)
      },

      // 2. 特殊提交风格
      addFiveSpe(count) {
        this.$store.commit({
          type: 'addFiveSpe',
          count
        })
      },
      // 抽成常量
      ADDSTUDENT(obj) {
        // 抽成常量提交
        this.$store.commit('ADDSTUDENT', obj)
      },
      updateInfo() {
        this.$store.commit('updateInfo')
      },

      aUpdateInfo(state) {
        //  传参情况
        // aUpdateInfo(state, payload) {
        //  如果要异步,则应dipatch调用action里面的事件
        // .then对应的是index.js中的promise
        this.$store.dispatch('aUpdateInfo', '我是携带的信息').then(() => {
          console.log('我是回调函数')
        })
      },
      // 对moduleA里面的name进行修改
      // 因为可以用同样的方式进行修改this.$store.commit(),所以事件的名称请保证全局唯一
      updateName(payload) {
        this.$store.commit('updateName', payload)
      },
      // moduleA自身store的异步修改
      mUpdateName(state) {
        this.$store.dispatch('mUpdateName')
      }
    }
  }
</script>

<style>

</style>

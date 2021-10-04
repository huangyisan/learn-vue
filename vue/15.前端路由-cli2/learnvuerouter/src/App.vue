<template>
  <div id="App">
    <!-- 编写router-link组件,里面用to='路径地址'-->
    <!--添加tag 表示之后被渲染成button元素-->
    <!--给replace属性,则采用replace模式,则不会使用pushState属性了-->
    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/about" replace>关于</router-link>
    <!--使用代码的方式修改路由vue-router-->
    <button @click="homeClick">首页</button>
    <!--服务器动态生成user后面的内容,作为变量给userId, 使用字符串拼接-->
    <router-link v-bind:to='"/user/"+userId' replace>用户</router-link>

    <!--使用button函数的方式处理userId跳转-->
    <button @click="userClick">用户</button>

    <!--传递数据,则需要作为对象,v-bind:to的方式, 这种传参为?name=yisan-->
    <router-link v-bind:to="{path: '/profile', query: {name:'yisan'}}">档案</router-link>
    <!--使用button函数的方式来传递query-->
    <button @click="profileClick">档案</button>

    <!--实现keepalive 对Profile User进行排除, Profile,User是组件name的属性, User前面不要加空格-->
    <keep-alive exclude="Profile,User">
      <!--占位组件, 表示点击url后,往router-view组件里面渲染-->
      <router-view></router-view>
    </keep-alive>

    <h2>不动</h2>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        userId: 'zhangsan'
      }
    },
    //绑定homeClick事件,然后用代码的方式修改vue-router
    methods: {
      //只要是router相关的组件都在组件里面加了$router这个属性
      homeClick() {
        //  使用push的方式
        // this.$router.history.push('/home')
        //  使用replace的方式
        this.$router.history.replace('/home')
      },
      userClick() {
        this.$router.push('/user/' + this.userId).catch(err => {
        })
      },
      // 使用函数的方式进行数据传递
      profileClick() {
        this.$router.push({
          path: '/profile',
          // query为一个对象类型
          query: {
            name: 'kobe',
            age: 19,
            height: 1.87
          }
        }).catch(err => {
        })
      }
    }
  }
</script>

<style>
  /* 当元素被激活后,属性会多了active-class-active这个class,就可以对其设定样式了*/
  /*.router-link-active {*/
  /* 元素添加了active-class属性,并指定为active,所以修改了原本的active-class名称为active*/
  .active {
    color: #f80
  }
</style>

<!--<style>-->
<!--#app {-->
<!--font-family: 'Avenir', Helvetica, Arial, sans-serif;-->
<!-- -webkit-font-smoothing: antialiased;-->
<!-- -moz-osx-font-smoothing: grayscale;-->
<!--text-align: center;-->
<!--color: #2c3e50;-->
<!--margin-top: 60px;-->
<!--}-->
<!--</style>-->

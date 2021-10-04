<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户相关信息</p>
    <!--获取用户的动态属性 得到userId-->
    <h2>{{userId}}</h2>
  </div>
</template>

<script>
  export default {
    name: "User",
    computed: {
      userId() {
        // 这边是$route, 当前哪个路由活跃就是取哪个route
        return this.$route.params.userId
      }
    }
  }
</script>

<style scoped>

</style>

<template>
  <div>
    <h2>我是首页</h2>
    <!--添加router-link标签 这里需要写完整的路径-->
    <router-link to="/home/message">消息</router-link>
    <router-link to="/home/news">新闻</router-link>
    <!-- 父组件内添加router-view块-->
    <router-view></router-view>
  </div>

</template>

<script>
  export default {
    name: "Home",
    // 添加path属性,用来实现切回首页的时候,默认为之前离开展现的状态
    data() {
      return {
        path: '/home/news',
      }
    },
    created(){
      console.log('created')

    },
    // destroyed和activated两个函数只有在被keep-alive标签包裹的时候才有效
    destroyed(){
      console.log('destory')
    },
    // 当页面活页的时候产生的行为,用来记录活跃的时候,记录的内容
    activated() {
      this.$router.push(this.path).catch(err => {})
    },
    beforeRouteLeave(to, from, next) {
      console.log('this.path:', this.path)
      // 将this.path改写成当前页面的path
      this.path = this.$route.path;
      next()
    }


  }
</script>

<style scoped>

</style>

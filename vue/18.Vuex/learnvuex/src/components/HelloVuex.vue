<template>
  <div>
    <!-- 使用 $store的方式访问vuex中state对象中的counter属性-->
    <h2>{{$store.state.counter}}</h2>
  </div>
  
</template>

<script>
  export default {
    name: "HelloVuex",
  }
</script>

<style scoped>

</style>

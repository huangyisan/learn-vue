<template>
  <div id="app">
    <!-- 使用keepalive, 这样切换回来的时候能保证为切换出去的位置. destroy生命函数不会被触发-->
    <!-- 排除Detail-->
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>

    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  // import MainTabBar from '../components/content/mainTabbar/MainTabBar'
  import MainTabBar from 'components/content/mainTabbar/MainTabBar'

export default {
  name: 'App',
  components: {
    MainTabBar

  }
}
</script>

<style>

  @import './assets/css/base.css';

</style>

<template>
  <div id="App">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>




  </div>
</template>

<script>
  // <!-- import的情况 如果是别名直接使用即可-->
  import TabBar from '@/components/tabbar/TabBar.vue'
  import TabBarItem from '@/components/tabbar/TabBarItem.vue'
  import MainTabBar from '@/components/MainTabBar.vue'

  export default {
    name: 'App',
    components: {
      TabBar: TabBar,
      TabBarItem: TabBarItem,
      MainTabBar:MainTabBar,
    }
  }
</script>

<style>

</style>

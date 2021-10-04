<template>
  <!-- 因为会存在很多个页面的navbar,所以 这边不用id-->
  <div class="nav-bar">
    <!-- 需要对slot做样式的调整,所以需要在外面包一层div-->
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .nav-bar {
    display: flex;
    line-height: 44px;
    box-shadow: 0 1px 1px rgba(100,100,100,.1);
  }
  .left, .right{
    width: 60px;
  }
  .center {
    flex: auto;
    text-align: center;
  }
</style>
<template>
  <div id="tab-bar">
    <slot>
    </slot>
  </div>
</template>

<script>


  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  /* 引入css,用import 因为在style里面 */
  @import "../../assets/css/base.css";

  #tab-bar {
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 1px;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, .1);
  }


</style>

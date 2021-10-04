<template>
  <div class="goods">
    <!--<ul>-->
      <!--<li>商品列表1</li>-->
      <!--<li>商品列表2</li>-->
      <!--<li>商品列表3</li>-->
      <!--<li>商品列表4</li>-->
      <!--<li>商品列表5</li>-->
      <!--<li>商品列表6</li>-->
      <!--<li>商品列表7</li>-->
      <!--<li>商品列表8</li>-->
      <!--<li>商品列表9</li>-->
      <!--<li>商品列表10</li>-->
    <!--</ul>-->
    <goods-list-item v-for="item in goods" :goodsitem="item"></goods-list-item>

  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem'

  export default {
    name: "GoodsList",
    components: {
      GoodsListItem,
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .goods {
    /* 商品一行显示两个*/
    display: flex;
    /* 包裹, 一行内不会塞下很多东西,取决于width,. 这个width定义在goodslistitem.vue里面, 48%*/
    flex-wrap: wrap;
    /* 对内容均等分*/
    justify-content: space-around;
  }

</style>
<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav-bar" @titleClick="titleClick"></detail-nav-bar>
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probe-type="3">
      <detail-swiper :topimages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad" ref="goods"></detail-goods-info>
      <detail-params-info :paramInfo="paramInfo" ref="params"></detail-params-info>
    </scroll>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo'
  import DetailParamsInfo from './childComps/DetailParamsInfo'

  import Scroll from 'components/common/scroll/Scroll'

  import {getDetail, GoodsInfo, Shop} from 'network/detail'

  import {debounce} from 'common/utils'


  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      Scroll,
      DetailParamsInfo,
    },
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        //   参数页面信息
        paramInfo: {},
        // 存放区块的y轴位置
        themeTopY: [0, 1000, 1500],
        //用于防抖
        getThemeTopY: null
      }
    },
    created() {
      // 1. 获得当前页面的iid
      this.iid = this.$route.params.iid

      //  2. 根据iid获取数据
      getDetail(this.iid).then(res => {
        //  3. 获取顶部轮播图片数据
        const data = res.result
        this.topImages = data.itemInfo.topImages
        // this.topImages = this.topImages.map(x => 'http:' + x)
        // console.log(this.topImages[0])

        //  获取商品信息

        this.goods = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services)
        // console.log(this.goods)

        // 创建店铺信息对象
        this.shop = new Shop(data.shopInfo)

        //  保存商品的详情数据
        this.detailInfo = data.detailInfo

        //  取出参数的信息
        this.paramInfo = data.itemParams


      })
      this.getThemeTopY = debounce(() => {
        this.themeTopY = []
        // 写入区块的offsetTop, 参数的offsetTop.
        // offsetTop不对应该都是图片未加载产生的
        this.themeTopY.push(0)
        this.themeTopY.push(this.$refs.params.$el.offsetTop)
        this.themeTopY.push(this.$refs.goods.$el.offsetTop)
        console.log(this.themeTopY)
      }, 300)
      // 当渲染出来后会回调$nextTick函数, 然后执行里面的内容
      // 在created阶段, $nextTick回调是在dom渲染完后, 但不保证里面图片是否都加载完

      // this.$nextTick(() => {
      //
      //
      // })
    },

    mounted() {
    },

    methods: {
      // 图片加载的回调函数
      imageLoad() {
        this.$refs.scroll.refresh()
        //图片全部加载完后, 执行
        this.getThemeTopY()
      },


      //  用来点击跳转到对应区块
      titleClick(index) {
        console.log(index)
        //  通过index 来滚动到对应的区块
        this.$refs.scroll.scrollTo(0, -this.themeTopY[index], 100)
      },
      //  滚动监听, 用来处理滚动到某个区域, 顶栏文字内容的切换
      contentScroll(position) {
        console.log(position)
        //  比较y和this.themeTopY[i]和this.themeTopY[i+1]判断采用哪个index
        // 这边i需要转换
        if (pos) {

        }
      }
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 8;
    background-color: #fff;
    /* 如果不给高度,则高度被内容撑开,所以要给一个高度, 高度为视口高度,所见即所高*/
    height: 100vh;

  }

  .content {
    /* 高度为父组件的高度来计算*/
    height: calc(100% - 44px)
  }

  .detail-nav-bar {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
</style>
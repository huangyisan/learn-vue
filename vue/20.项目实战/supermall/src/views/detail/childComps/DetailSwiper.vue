<template>

      <!--<swiper class="swiper" :options="swiperOption">-->
      <swiper class="detail-swiper">
      <!--<swiper class="swiper">-->
        <swiper-item v-for="item in topimages">
          <!--<div>{{item}}</div>-->
          <img :src="item" alt="">
        </swiper-item>
        <!--<div class="swiper-pagination" slot="pagination"></div>-->
      </swiper>
      <!--<div v-for="item in topimages">-->
        <!--<img :src="item" alt="">-->
      <!--</div>-->


</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'

  // vue-awesome-swiper
  // import 'swiper/dist/css/swiper.css'
  // import { swiper, swiperSlide } from 'vue-awesome-swiper'


  export default {
    name: "DetailSwiper",
    // data(){
      // return {
      //   swiperOption: {
      //     pagination: {
      //       el: '.swiper-pagination'
      //     },
      //     autoplay: {
      //       delay: 2500,
      //       disableOnInteraction: false
      //     },
      //   }
      // }

    // },
    components: {
      Swiper,
      SwiperItem,
      // swiper,
      // swiperSlide
    },
    props: {
      topimages: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .detail-swiper img{
    /*max-height: 300px;*/

    width: 100%;
  }
  .detail-swiper {
    max-height: 300px;
    overflow:hidden;
  }

  /* 滑动页面 圆点css样式穿透*/
  /*.swiper-pagination >>> .swiper-pagination-bullet {*/
    /*opacity: 1;*/
    /*border: #fff solid 1px;*/
    /*background-color: #fff;*/
  /*}*/
  /*.swiper-pagination >>> .swiper-pagination-bullet-active {*/
    /*background-color: #D43E2E;*/
    /*border: #D43E2E solid 1px;*/
  /*}*/
</style>
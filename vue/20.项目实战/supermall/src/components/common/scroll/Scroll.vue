<template>
  <!--ref 一般绑定给子组件,明确指定某个子组件-->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>

  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: null
      }
    },

    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })

      // 监听滚动坐标
      this.scroll.on('scroll', (position) => {
        //position 则需要传出去,给需要的模板使用
        // console.log(position)
        this.$emit('scroll', position)
      })

      //  监听上拉事件
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')

      })

      this.scroll.refresh()

    },
    methods: {
      scrollTo(x, y, time) {
        this.scroll.scrollTo(x, y, time)
      },
      finishPullUp(){
        this.scroll.finishPullUp()
      },
      refresh(){
        this.scroll.refresh()
      },
      getPositionY() {
        return this.scroll.y
      }
    }
  }
</script>

<style scoped>

</style>
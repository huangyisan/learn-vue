import {debounce} from "./utils";

// 使用混入
export const itemListenerMixin = {
  mounted() {
    // 如果放在created里面,有可能组件还没渲染出来,则得不到$refs.scroll
    //  监听item中图片加载完成
    const refresh = debounce(this.$refs.scroll.refresh, 200)

    this.itemImgListener = () => {
      refresh()
    }
    this.$bus.$on('itemImageLoad', this.itemImgListener)
    console.log('我是混入mounted')
  }
}
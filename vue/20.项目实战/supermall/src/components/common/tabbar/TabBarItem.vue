<template>
  <div class="tab-bar-item" @click="itemClick">
    <!--配置具名插槽,用来放图片和名称-->
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else-if="isActive"><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TbaBarItem",
    // 动态获取path
    props: {
      // 限定为string类型, path为自定义的key,从<tab-bar-item>的属性中获取
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }

    },
    // data() {
    //   return {
    //     isActive: true
    //   }
    // },
    methods: {
      itemClick() {
        console.log(this.path)
        this.$router.replace(this.path)
      }
    },
    computed: {
      // 激活页面 tabbar文字红色的实现
      isActive() {
        // 看当前页面目录是不是等于当前目录.
        // 如果当前在/home, 那么对于home这个tabbaritem来说就是他属性path的目录,则返回true,那就属于按钮按下按下的状态
        // 但上面方法漏了存在子目录的情况,如果存在子目录,那就无法使用了.
        // return this.$route.path === this.path

        // 采用indexOf的方式,即便是有子目录,那么父级目录的字符串肯定在子目录内,不会返回-1.
        // 不等于-1 表示存在包含的子串.
        // 如果当前在home页面,那么/home就是/home的子串,!== -1 成立,返回true了,而其他页面返回false, 则触发了home颜色变红,其他不变红的特性
        // 但这个方法也并不严谨, 假设开头为其他字符串,中间出现了/home这个字符串,也会将home变成红色
        // return this.$route.path.indexOf(this.path) !== -1

        // 使用startsWith,也会存在这情况.如果/home开头遇到/ho呢? 也是变红.
        // 目前暂时未找到能百分百解严谨的解决红色返回的方案,得路由规划的时候规划好了
        return this.$route.path.startsWith(this.path)
      },
      activeStyle() {
        // 如果是活跃情况,则返回style
        return this.isActive ? {color: this.activeColor} : {}
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    /*均分*/
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
    /*line-height: 49px;*/

  }

  .tab-bar-item img {
    margin-top: 3px;
    width: 20px;
    height: 20px;
    /* 去掉图片下面的空间 */
    vertical-align: middle;
    margin-bottom: 2px;
  }

  /*.active {*/
    /*color: red;*/
  /*}*/
</style>

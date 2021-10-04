<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item, index) in titles" class="title-item" :class="{active: index === currentIndex}" @click="titleClick(index)">
          <span>{{item}}</span>
        </div>
      </div>
    </nav-bar>
  </div>
  
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: "DetailNavBar",
    components: {
      NavBar,
    },

    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0,
      }
    },
    methods: {
      titleClick(index){
        this.currentIndex = index
      //  将点击事件发送, 让
        this.$emit('titleClick', index)
      },
      backClick() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .title {
    display: flex;
    font-size: 13px;

  }

  .title-item {
    flex: 1;
  }

  .active {
    color: var(--color-tint);
  }

  .active span {
    border-bottom: solid 3px var(--color-tint);
  }

  .title-item span {
    padding: 5px;
  }

  .back img{
    margin-top: 13px;
    margin-left: 8px;
  }

</style>
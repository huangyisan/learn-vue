<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" class="tab-control-item" :class="{active: index === currentIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    // 因为这个组件只有文字标题的不同,所以没必要用slot,直接让后端传入文字,前端使用v-for进行遍历,然后统一样式即可.
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data () {
      return {
        currentIndex: 0
      }
    },
    // 点击变红
    methods: {
      itemClick(index) {
        this.currentIndex = index;
      //  将点击的事件发送到父组件
        this.$emit('tabClick', index)
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    font-size: 15px;
    line-height: 40px;
    background-color: #fff;
  }

  .tab-control-item {
    flex: 1;

  }


  .active span {
    border-bottom: 3px solid var(--color-tint);
    padding-left: 5px;
  }

  .tab-control-item span {
    padding: 5px;
  }
</style>
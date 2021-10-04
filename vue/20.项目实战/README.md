## 步骤
1. 划分好文件夹
2. 下载用来统一样式的css文件, normalize.css, https://necolas.github.io/normalize.css/latest/normalize.css
3. 建立属于自己的统一样式文件, base.css



## tabbar吸顶效果
1. 监听想上滚动
2. 当滚动到某个位置的时候,将tabbar修改成fixed
3. 监听向下滚动
4. 滚动到某个位置的时候,将tabbar的fixed属性移除掉

### 简单实现吸顶效果
简单实现可以使用position的sticky属性,配合top属性, 当顶部接近top设置的像素的时候, 则浏览器将组件的position属性改为fixed
```
position: sticky;
top: 44px;
```


## 流行,新款,精选数据结构

```
goods: {
  'pop': {page: 1, list: [150]},
  'news': {page: 2, list: [10]},
  'sell': {page: 3, list: [50]}
}
```

开始先请求第一页, 当上拉加载的时候再请求下一页

## 页面顺滑滚动使用better-scroll框架
在categroy中使用

### 上拉加载更多功能
1. 监听滚动位置
2, 如果到底部了, 则发送请求,进行数据获取,然后渲染加载新数据

## ref
1. ref如果是绑定在组件中, 那么通过this.$refs.refname获取到的是一个组件对象.
2. ref如果绑定在普通元素中, 那么通过this.$refs.refname获取到的是一个元素对象.

## 解决首页better-scroll可滚动区域的问题
* better-scroll在决定可滚动区域范围, 是根据,该对象的scrollerHeight属性决定的.
* scrollerHeight属性是根据放better-scroll的content中的子组件的高度
* 但刚开始计算scrollerHeight的时候,是没有将图片计算在内, 所以计算出来的scrollerHeight是有问题的

### 如何解决这个问题
* 监听每一张图片是否加载完成, 只要有一张图片加载完了,就执行一次refresh()

### 如何监听图片是否加载完\
在img标签里
```
@load="执行函数"
```

## 防抖函数
单位等待时间内如果有变化, 则继续等待, 只在最后一次, 发送请求.
1. 防抖debounce/节流throttle
2. 防抖函数起作用过程
  * 如果我们执行refresh, 且会被执行30次
  * 当把refresh函数传入到debounce函数中, 生成一个新的函数
  * 之后在调用非常频繁的时候, 就是用新生成的函数
  * 而新生成的函数, 并不会非常频繁的调用, 如果下一次执行来的非常快, 那么会将上一次取消掉

## tabControl的吸顶效果
1. 必须知道滚动到多少的时候, 开始有吸顶效果. 获取tabControl的offsetTop属性的值
2. 如果直接从mounted状态获取值是有问题的.
3. 正确获取值的方法
  * 监听homeSwiper中img的加载完成
  * 加载完成后, 发出事件, 在Home.vue中,获取正确的值
  * 为了不让HomeSwiper发出多次事件, 可以使用isLoad的变量进行状态的记录
4. 监听滚动, 动态改变tabControl样式
5. 因为是两个分开的tabControl, 所以还要处理好 点击某个tabControl后, 另外一个也要保持被点击的位置样式显示

## 让home保持原来的状态
1. home页面不要销毁掉destroy()
  * 使用keep-alive
2. 让home中的内容保持原来的位置
  * 离开时, 保存一个位置信息
  * 进来时, 将位置设置为原来保存信息的位置, 最好再进行一次refresh()

## mixin混入
  * 某个功能,或者属性, 继续添加的时候可以使用. 类似python的mixin, 将原先对象已存在的属性,方法, 进行补充.

## 联动效果
1. 点击详情页上栏标题, 能直接跳转滚动到内容区块
  * 在detail中监听标题的点击, 获取index
  * 滚动到对应的主题:
    * 获取所有主题的offsetTop
    * 问题: 在哪里能获取到正确的offsetTop
      * 1. created不行, 无法获取到元素
      * 2. mounted不行, 数据还没获取到,虽然dom已经渲染
      * 3. 数据回调中也不行, dom还没渲染完
      * 4. $nextTick也不行, 因为图片高度没有被计算在内
      * 5. 只有在图片加载完后, 获取的高度才是正确的

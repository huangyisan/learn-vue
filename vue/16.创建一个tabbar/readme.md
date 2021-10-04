## tabbar
tabbar就类似微信下面的导航栏

### 如何封装
1. 自定义tabbar组件,在app中使用
2. 让tabbar处于底部,并且设置相关的样式

### tabbar中显示的内容由外界决定
1. 定义插槽
2. flex布局评分tabbar

### 自定义tabbaritem,可以传入图片或者文字
1. 定义tabBarItem, 并且定义两个插槽: 图片, 文字.
2. 给两个插槽外包装div,用于设置样式
3. 填充插槽,实现底部tabBar的效果
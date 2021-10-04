### vuex插件安装
```
npm install vuex --save
```

### 全局单例模式(大管家)
1. 基本思想,将共享的状态抽出来,让全局单例模式进行统一管理.
2. 之后,每个视图如果用到,且需要记性访问和修改等操作,需遵循规定好的规定来执行.
3. 如果要修改state,则通过mutations去修改. 只有通过mutations去修改,devtools才会记录跟踪修改状态.
4. 如果是同步操作,在mutations里面修改. 异步操作(网络请求等情况),则在action中修改, action处理完后会自动提交给mutations.

### state单一状态树
1. 单一状态树能够让我们最直接的方式找到某个状态的片段, 而且在之后的维护和调试过程中, 也可以非常方便的维护和管理.
2. 不建议创建多个store实例, 所有的信息状态都用一个store管理即可.

### getters
1. 当我们需要从store中获取一些state变异后的状态

### mutation状态更新
1. Vuex的store状态的更新唯一方式: 提交Mutation
2. mutation主要包括两部分, 字符串的事件类型和一个回调函数.
3. mutation的定义方式

```
mutations: {
  increment(state) {
    state.count++
  }
}
```

4. 使用commit进行对mutation更新
5. 可以传入参数,称之为payload, 该payload也可以是一个对象

### mutation响应规则
1. Vuex的store中的state是响应式的, 当state中的数据发生改变时, Vue组件会自动更新
2. 这就要求我们必须遵守一些Vuex对应的规则:
  * 提前在store中初始化好所需要的属性
  * 当给state中的对象添加新属性时, 使用下面的方式:
    * 方式一, 添加: 使用Vue.set(obj, key, value)  删除: Vue.delete(obj, key)
    * 方式二, 用新对象给旧对象重新赋值

### mutation常量类型
1. 当变量多的时候,可以抽成常量(但我觉得现在有IDE错误提示的情况,比较鸡肋)

### mutation同步函数
1. 通常情况下, Vuex要求我们mutation中的方法必须是同步方法, 主要原因是,当使用devtools时, 可以用其捕捉到mutatuon快照. 但如果是异步操作,那么devtools将不能很好的捕捉到操作什么时候会完成.
2. 如果要用异步函数,则不要在mutation里面操作.
3. action类似mutation, 但是是用来替代mutation的异步操作.

### action使用的大致思路
1. vue module文件里面使用dispatch调用action的事件,然后action事件里面去调用mutation的事件,也就是加一层action的代理,去访问mutation.

### modules
1. 数据往state中存放, 久而久之容易杂乱无章, 使用modules可以进行归类
2. 需要数据归类抽离,则可以用modules.
3. modules下的每个模块,拥有自己的state, mutation, action, getters等
4. 因为可以用同样的方式进行修改this.$store.commit(),所以事件的名称请保证全局唯一

### 官方推荐Vuex目录结构
1. 除了root的state不动,其他全部抽出来,独立成文件, 通过引入的方式,进行划分
2. modules抽成文件夹, 不同的mudules文件放置于mudules文件夹内

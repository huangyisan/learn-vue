### 脚手架的安装

我这边使用3.2.1版本,目前最新已经到4了
1. `nnpm install @vue/cli@3.2.1 -g`
2. 这种脚手架的安装是cli3的版本.之后学习会用cli2.如果想要按照cli2的方式初始化是不可以的.

### 拉取2.x模板
1. 这样既可以用3,也可以用2啦
2. `npm install -g @vue/cli-init`

### vue cli2初始化项目
`vue init webpack my-project`

### vue cli3初始化项目
`vue create my-project`


### 创建项目(cl2的方式)
1. 项目名字
2. 项目描述
3. 项目作者
4. 选择采用runtime + compiler方式还是runtime-only方式
5. 是否安装路由
6. 是否使用ESLint(对js代码进行限制,如果代码不规范,则编译器报错)
7. 是否单元测试
8. 是否e2e测试(端到端测试)
9. 采用何种方式管理(npm,yarn)

```
$ vue init webpack vuecli2test

? Project name vuecli2test
? Project description vue cli2 test
? Author huangyisan <ahuangyisan@live.cn>
? Vue build standalone
? Install vue-router? No
? Use ESLint to lint your code? No
? Set up unit tests No
? Setup e2e tests with Nightwatch? No
? Should we run `npm install` for you after the project has been created? (recommended) npm

   vue-cli · Generated "vuecli2test".
```

### 创建项目(cl3的方式)
1. vue create 项目名称
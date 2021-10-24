1. webpack.config.js文件是webpack的配置文件, 里面依赖了path模块, 所以先在项目中执行`npm init`, 这样就会得到package.json文件.
2. 再执行npm install ,因为package.json里面没有依赖包,所以并不会安装东西,如果有内容的话,则这个指令会根据package.json中定义的依赖包进行安装,最后会生成package-lock.json
3. 编写webpack.config.js后, 则只需要执行webpack命令,就可以将指定源目录的内容打包到指定目录了. **在webpack.config.js中可以配置输入源地址和输出源地址.**
4. 在开发中一般会敲webpack命令,而是敲npm run xx命令, 测试可以将命令和npm run xx进行映射. 映射后如果执行npm run xx 则优先在本地环境找, 如果在终端直接执行webpack,则是在全局找.所以需要在本地也安装下webpack. **本地安装, npm install webpack@3.6.0 --save-dev**, 安装完毕在package.json中能看到添加了webpack的依赖.
  * 只需要在packages.json的script块中定义映射关系即可.
  ```json
    {
    "name": "meetwebpack",
    "version": "1.0.0",
    "description": "",
    "main": "webpack.config.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "build": "webpack"
        },
        "author": "",
        "license": "ISC",
        "devDependencies": {
            "webpack": "^3.6.0"
        }
    }
  ```
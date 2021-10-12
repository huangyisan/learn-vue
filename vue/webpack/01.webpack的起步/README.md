1. src目录放入源代码。
2. dist为webpack打包产出文件。
3. 打包命令`webpack ./src/main.js ./dist/bundle.js` 打包的时候webpack会自动处理main.js的包依赖关系。 打包源文件 -> 打包目标文件
4. 产出`./dist/bundle.js`后，在`index.html`中进行引入。


* 即便在src中存在多种模块化的标准，比如commomJS和ES6模块的混合，也可以同时使用webpack打包。


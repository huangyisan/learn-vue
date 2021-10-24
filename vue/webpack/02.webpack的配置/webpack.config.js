// 该配置文件为webpack的配置文件

// 导入path模块
const path = require('path');


module.exports = {
    // 表示输入源
    entry: './src/main.js',
    // 表示对输入源处理后,输出位置
    output: {
        //路径,动态获取路径,这边要用绝对路径, resolve函数会对两个路径进行拼接
        // __dirname是全局变量,表示当前webpack.config.js文件所在路径
        path: path.resolve(__dirname, 'dist'),
        //  文件名
        filename: 'bundle.js'
    },
};
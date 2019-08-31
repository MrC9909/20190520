/*
* 1.如果没有webpack.config.js我们直接进行编译：
*   webpack ./src/js/index.js ./build/js/build.js
*
* 2.我们直接执行webpack命令 会自动去找webpack.config.js文件  ，自动帮我们完成编译
*
*
* webpack本身只能识别纯js和json  对于webpack中所有的文件都是模块，资源文件直接导入即可
* */

//node.js内置模块  reslove、join
const path = require('path');
//将css文件提取为单独的css文件
const ExtractTextPlugin = require("extract-text-webpack-plugin");
//清空目录
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

//导入common文件
const common = require('./webpack.common');

//文件合并
const merge = require('webpack-merge');

//暴露
module.exports = merge(common,    {
    //配置loader
    module: {
        //配置规则
        rules: [
            //合并css为单独的一个文件
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    //如果需要，可以在 sass-loader 之前将 resolve-url-loader 链接进来
                    use: ['css-loader', 'less-loader']
                })
            },
        ]
    },
    //插件
    plugins: [
        new ExtractTextPlugin("./css/build.css"),//配置插件提取单独的css
        //最新版本不需要自己配置，直接调用
        new CleanWebpackPlugin()
    ]
});

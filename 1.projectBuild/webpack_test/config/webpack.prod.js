/*
* 1.如果没有webpack.config.js我们直接进行编译：
*   webpack ./src备份1/js/index1.js ./build/js/build.js
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
//压缩css
const CleanCSSPlugin = require("less-plugin-clean-css");

//处理html(从指定模板下输出对应的html文件并且自动给我添加js和css)
const HtmlWebpackPlugin = require('html-webpack-plugin');

//导入webpack
const webpack = require('webpack');

//导入common文件
const common = require('./webpack.common');

//文件合并
const merge = require('webpack-merge');


//暴露
module.exports = merge(common,    {
    output: {
        //输出的绝对路径
        path: path.resolve(__dirname, '../dist'),
        //名称
        filename: './js/[name].[hash:10].min.js'
    },
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
                    use: ['css-loader','postcss-loader',{
                        loader:"less-loader",
                        options: {
                            plugins: [
                                new CleanCSSPlugin({ advanced: true }) //压缩我们的css
                            ]
                        }
                    }
                    ]
                })
            },
        ]
    },
    //插件
    plugins: [
        new ExtractTextPlugin("./css/[name].[hash:10].min.css"),//配置插件提取单独的css
        //最新版本不需要自己配置，直接调用
        new CleanWebpackPlugin(),
        //
        //对js文件进行压缩
        new webpack.optimize.UglifyJsPlugin({
            //对压缩后的js文件的资源描述
            sourceMap:true
        }),

        new HtmlWebpackPlugin({
            //输出的文件名称
            filename: 'index.html',
            //指定模板进行输出
            template:'./src备份1/index.html',
          minify:{
              //压缩空格
              collapseWhitespace:true,
              //去掉注释
              removeComments:true
          }
        }),
    ],
    devtool:'source-map'
});

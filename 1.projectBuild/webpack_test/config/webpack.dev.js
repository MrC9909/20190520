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
//处理html(从指定模板下输出对应的html文件并且自动给我添加js和css)
const HtmlWebpackPlugin = require('html-webpack-plugin');
//清空目录
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

//导入webpack
const webpack = require('webpack');

//暴露
module.exports = {
    //入口  入口文件的路径地址
    entry: './src/js/index.js',
    //出口
    output: {
        //输出的绝对路径
        path: path.resolve(__dirname, '../build'),
        //名称
        filename: './js/build.js'
    },
    //配置loader
    module: {
        //配置规则
        rules: [
            //编译less-loader
            /*{
                test: /\.less$/,  //匹配文件
                //使用哪个loader进行编译
                use: [  //loader的加载顺序是从右往左进行加载
                        {
                            loader: "style-loader" // 把js中的css放到style中然后插入到html中
                        },
                        {
                            loader: "css-loader" // 把css文件编译为common.js的模块
                        },
                        {
                            loader: "less-loader" // 把less编译为css
                        }
                    ]
            },*/
            //合并css为单独的一个文件
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    //如果需要，可以在 sass-loader 之前将 resolve-url-loader 链接进来
                    use: ['css-loader', 'less-loader']
                })
            },
            //编译图片，不转为base64  (一般要做图片优化base64转换的需要要求图片在8-12kb之间)  file-loader
            /*{
                //匹配文件
                test: /\.(png|jpg|gif)$/,
                use: [ //用什么loader进行加载
                    {
                        loader: 'file-loader',
                        //配置选项
                        options:{
                            name:'[name]_[hash:10].[ext]',  //hash值取5位，并且为默认后缀
                            outputPath:'imgs',//配置图片最终输出的位置  相对于build 因为output的输出目录是build
                            publicPath:'../build/imgs'  //指定资源文件目录
                        }
                    }
                ]
            }*/

            //要将图片做base64转化
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,  //限制做base64转化的时候图片的大小 小于8kb
                            outputPath:'imgs',//配置图片最终输出的位置  相对于build 因为output的输出目录是build
                            publicPath:'../imgs'  //指定资源文件目录
                        }
                    }
                ]
            },

            //语法检查
            {
                test: /\.js$/, // 涵盖 .js 文件
                enforce: "pre", // 预先加载好 jshint loader
                exclude: /node_modules/, // 排除掉 node_modules 文件夹下的所有文件
                use: [
                    {
                        loader: "jshint-loader",
                        options: {
                            esversion: 6,
                            // 更多 jslint 的配置项
                            // 查询 jslint 配置项，请参考 http://www.jshint.com/docs/options/


                            //jslint 的错误信息在默认情况下会显示为 warning（警告）类信息
                            //将 emitErrors 参数设置为 true 可使错误显示为 error（错误）类信息
                            emitErrors: false,

                            //jshint 默认情况下不会打断webpack编译
                            //如果你想在 jshint 出现错误时，立刻停止编译
                            //请设置 failOnHint 参数为true
                            failOnHint: false,

                            // 自定义报告函数
                            // reporter: function(errors) {
                            //     console.log('哈哈哈');
                            // }
                        }
                    }
                ]
            },

            //编译-bable-loader
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,//排除
                use: {
                    loader: 'babel-loader',  //加载babel-loader
                    //配置项
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }

        ]
    },

    //创建服务
    devServer: {
        contentBase: './dist', //启动的文件目录
        hot: true,  //开启热更新
        port: 3000, //指定端口号
        open: true,  //自动打开浏览器
        compress: true//启动gzip
    },
    //插件
    plugins: [
        new ExtractTextPlugin("./css/build.css"),//配置插件提取单独的css
        new HtmlWebpackPlugin({
            //输出的文件名称
            filename: 'index.html',
            //指定模板进行输出
            template:'./src/index.html'
        }),
        //最新版本不需要自己配置，直接调用
        new CleanWebpackPlugin(),
        //我们还添加了 NamedModulesPlugin，以便更容易查看要修补(patch)的依赖
        new webpack.NamedModulesPlugin(),
        //实现热膜替换
        new webpack.HotModuleReplacementPlugin()
    ]
};
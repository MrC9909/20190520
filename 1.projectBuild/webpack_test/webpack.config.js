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

//暴露
module.exports = {
    //入口  入口文件的路径地址
    entry: './src/js/index.js',
    //出口
    output: {
        //输出的绝对路径
        path: path.resolve(__dirname, 'build'),
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

            //合并css为单独的一个文件
        ]
    },
    //插件
    plugins: [
        new ExtractTextPlugin("./css/build.css"),//配置插件提取单独的css
    ]

};
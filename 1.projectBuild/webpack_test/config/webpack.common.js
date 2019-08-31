//node.js内置模块  reslove、join
const path = require('path');
//处理html(从指定模板下输出对应的html文件并且自动给我添加js和css)
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    //插件
    plugins: [
        new HtmlWebpackPlugin({
            //输出的文件名称
            filename: 'index.html',
            //指定模板进行输出
            template:'./src/index.html'
        }),
    ]
};
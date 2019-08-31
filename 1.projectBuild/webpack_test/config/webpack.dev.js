//我们配置的dev在内存当中进行运行的不会产生包文件


//node.js内置模块  reslove、join
const path = require('path');



//导入webpack
const webpack = require('webpack');

//导入common文件
const common = require('./webpack.common');

//文件合并
const merge = require('webpack-merge');

//暴露
module.exports =merge(common,{
    //入口  入口文件的路径地址
    entry: ['./src/js/index.js','./src/index.html'],

    //配置loader
    module: {
        //配置规则
        rules: [
            //编译less-loader
            {
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
            },

            //htmlloader
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
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
        //我们还添加了 NamedModulesPlugin，以便更容易查看要修补(patch)的依赖
        new webpack.NamedModulesPlugin(),
        //实现热膜替换
        new webpack.HotModuleReplacementPlugin(),

    ]
})


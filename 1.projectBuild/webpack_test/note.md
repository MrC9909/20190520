webpack
1.了解：webpack是静态模块打包器

2.webpack四个核心概念
    - 入口（entry）:主模块文件的路径
    - 出口 （output）:当前输出路径地址  并且需要配置输出文件名称
    - loader:因为webpack本身只能处理纯js文件和json文件，所以需要依赖loader去加载其它资源文件
    - plugins(插件):让loader做的不够好的，或者不能够去处理我们就是用插件
      
3.配置webpack.config.js文件 
module.exports = {
    entry:‘./src/index1.js’,
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'build.js'
    },
    module:{
        rules:[
            {
                test:/\.less$/,
                use:[
                    {....}
                ]
            },
        ]
    },
    
    plugins:[
        
    ]
} 

4. 配置可执行命令脚本
    我们在package.json文件下
    找到scripts
    "build":"webpack"  
    
5.执行命令脚本
    npm run 可执行命令脚本的属性名
    yarn  可执行命令脚本的属性名
    
    
6. 自定义webpack执行的目录文件

执行某个文件夹下的具体执行文件
webpack --config ./config/webpack.build.js   
执行某个文件夹下的具体执行文件并且可以查看隐藏信息
webpack --display-modules --config ./config/webpack.build.js   
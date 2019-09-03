【create-react-app的使用】
    
    >$ npm install create-react-app -g 全局安装  MAC电脑安装前加sudo否则没有权限(第一次)
    把模块安装在全局环境下的目的是可以使用命令操作
    
    >$ create-react-app [项目名称]
    基于脚手架命令创建出一个基于REACT的自动化/工程化目录，和生成package.jsons时候的目录名称规范一样，项目中不能出现：大写字母，中文汉字，特殊符号（-或者_是可以的）等
    
    【脚手架生成目录中的一些内容】
        node_modules 当前项目中依赖的包都安装在这里
            .bin文件本地项目中可执行命令，在package.json的scripts中配置对应的的脚本即可（其中又一个是react-script命令）
        
        public 存放的是当前项目的HTML页面，单页面应用只需要放一个index.html即可，多页面根据自己需求搞，放置对应的页面，目前项目一般都是单页面应用
        
        src 因为后期所有J项目结构中最重要的目录，S,路由，组件等都是放到这里面的（包括CSS或者图片等）
            index.js 当前项目的入口文件
        package.json  当前项目的配置清单"
            "dependencies":{
                "react":"^16.4.1",
                "react-dom":"16.4.1",
                "react-scripts":"1.1.4" 
            }    
            
            基于脚手架生成的工程目录，自动帮我们安装了三个模块，react react-dom react-scripts
            react-scripts集成了webpack需要的内容
                -> Babel 一套
                -> CSS处理一套
                -> SASS处理一套
                -> ESlint一套
                -> webpack一套
                ->其它的
            没有less的处理内容
            确实生成了很多东西，但是如果额外的还需要我们自己安装
                
            "scripts":{
                "start":"react-scripts start",
                "build":"react-scripts build",
                "test":"react-scripts test",
                "eject":"react-scripts eject",
            }
            
            可执行的命令脚本"$> npm run start/yarn start"
                start:开发环境下，基于webpack编译处理，最后可以预览当前项目开发的项目成果（在webpack中安装了devServer插件，基于这个插件会自动创建一个web服务[端口号默认是3000]，webpack会帮我们自动打开浏览器，并且展示我们的页面）
                build:项目需要部署到服务器上，我们需要先执行yarn build,把项目整体打包（完成会在项目中生一个build文件夹，这个文件夹中包含了所有编译后的内容，我们把它上传到服务器即可）
                eject:暴露webpack所有的配置文件，基于react脚手架去创建的工程花木路，默认有一个模块是react-scripts里边集成了所有webpack的内容，并且这个是隐藏的，为了目录的清晰，但是实际开发当中我们可能有必要去修改webpack的配置，我们需要去执行npm run eject/yarn eject  一旦暴露是不可逆的
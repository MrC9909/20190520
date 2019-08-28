/*
* npm install  包名  安装
* npm uninstall 包名 卸载
*
* yarn add 包名 安装
* yarn remove 包名 卸载
*
* */
/*
* 1.什么是gulp:基于流的自动化构建工具
* 2.gulp特点 基于流和异步构建
*
* 异步构建？怎么去解决gulp中异步问题
*   1.之前版本中gulp是可以有同步的
*   2.目前新版的gulp已经不支持同步了，全部是异步
*       我们只需要返回一个流就可以了
*           return  stream;
* 3.gulp的使用
*   1.安装gulp
*       全局安装  npm install gulp -g
*       局部安装  npm install gulp -D
*
*   2.引入gulp核心模块
*   const gulp = require('gulp');
*
*   3.配置插件任务
*   gulp.task('任务名称',回调函数);
*
*   4.执行任务  gulp  任务名
*
*   5.配置默认任务
*   之前我们执行gulp任务怎么执行 gulp 任务名称
*   gulp.task('default',()=>{});
*
* 4.gulp插件
*      1.下载插件
*       npm install  插件包名称  -D
*
*      2.导入插件
*      const 名称 = require('插件包名称‘);
*
*      3.在gulp任务回调函数中配置插件任务
* */




//引入gulp核心模块
const gulp = require('gulp');

//引入插件  语法检查
const jshint = require('gulp-jshint');

//语法转换
const babel = require('gulp-babel');

//将common.js语法转化为浏览器可以识别语法
const browserify = require('gulp-browserify');

//重新命名
const rename = require("gulp-rename");

//js压缩
const uglify = require('gulp-uglify');

//编译less
const less = require('gulp-less');

//自动补前缀
const LessAutoprefix = require('less-plugin-autoprefix')
const autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });

//合并
const concat = require('gulp-concat');

//压缩css
const cssmin = require('gulp-cssmin');

//img压缩
// const imagemin = require('gulp-imagemin');
//html压缩
const htmlmin = require('gulp-htmlmin');

//gulp-livereload 自动刷新
const livereload = require('gulp-livereload');
//gulp-connect：创建服务
const connect = require('gulp-connect');
//open：自动打开浏览器
const open = require('open');
//js  less  html...

//配置插件任务
//对js文件进行语法检查
//使用jshint进行语法检查
gulp.task('jshint',()=>{
    return gulp.src('./src/js/*.js')//将指定目录下的文件导入到gulp的流中
        .pipe(jshint({
            esversion: 6
        })) //做语法检查
        .pipe(jshint.reporter('default'))//改为默认，对检查出的语法问题进行输出
        .pipe(livereload());
});

//语法转化
gulp.task('babel',()=>{
    return gulp.src('./src/js/*.js') //将指定目录下的文件导入到gulp流中
        .pipe(babel({     //调用babel进行语法转化   将ES6Module模块语法转为了Common.js语法
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('./build/js'))  //将转化后的文件导出
        .pipe(livereload());
});

//将common.js语法转化为浏览器可以识别语法
gulp.task('browserify', function() {
   return  gulp.src('./build/js/index.js')
        .pipe(browserify()) //将common.js语法转化为浏览器可以识别语法
        .pipe(rename('built.js')) //将流中的文件进行重新命名
        .pipe(gulp.dest('./build/js'))
       .pipe(livereload());
});


//对js文件进行压缩  gulp-uglify
gulp.task('uglify',()=>{
    return  gulp.src('./build/js/built.js')
        .pipe(uglify()) //压缩js
        .pipe(rename('built.min.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(livereload());
});


//对less文件进行编译
gulp.task('less', function () {
    return gulp.src('./src/less/*.less')
        .pipe(less({
            plugins: [autoprefix]  //自动补前缀
        }))
        .pipe(gulp.dest('./build/css'))
        .pipe(livereload());
});

gulp.task('concat', function() {
    return gulp.src(['./build/css/test1.css','./build/css/test2.css'])
        .pipe(concat('built.css'))
        .pipe(gulp.dest('./build/css'))
        .pipe(livereload());
});

//css压缩
gulp.task('cssmin', function () {
    return gulp.src('./build/css/built.css')
        .pipe(cssmin())
        .pipe(rename('built.min.css'))
        .pipe(gulp.dest('./dist/css'))
        .pipe(livereload());
});

/*
gulp.task('imagemin', function () {
    return gulp.src('./src/imgs/*.{png,jpg,gif,ico}')
        .pipe(imagemin({  //在gulp流中进行图片压缩
            optimizationLevel: 6, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
        }))
        .pipe(gulp.dest('dist/img'));
});
*/

//html压缩
gulp.task('html', () => {
    return gulp.src('./src/index.html')
        .pipe(htmlmin({
            collapseWhitespace: true,  //压缩空格
            removeComments:true
        })) //html压缩
        .pipe(gulp.dest('./dist'))
        .pipe(livereload());
});

//自动化部署
gulp.task('watch',(bb)=>{
    //1. 在所有可能要执行任务后面加上 .pipe(livereload());
    //2. 配置watch任务（配置监听任务）
    livereload.listen();
    //通过自己服务器打开项目，自动刷新
    connect.server({
        root: './dist',  //路径
        port: 3000,//端口号
        livereload: true  // 自动刷新
    });
    //自动打开浏览器
    open('http://localhost:3000/index.html');

    //监视指定文件（第一个参数），一旦文件发生变化，就自动执行后面的任务（第二个参数）
    gulp.watch('./src/less/*.less', gulp.series(['less','concat','cssmin']));
    gulp.watch('./src/js/*.js', gulp.series(['jshint','babel','browserify','uglify']));
    gulp.watch('./src/index.html', gulp.series('html'));
    bb();
});

///配置默认任务
//让gulp任务按顺序执行  gulp.series(’任务名称1'，‘任务名称12’....);
gulp.task('js',gulp.series('jshint','babel','browserify','uglify'));
gulp.task('css',gulp.series('less','concat','cssmin'));

gulp.task('default',gulp.series('watch'));
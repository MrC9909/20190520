# Gulp

## Gulp 介绍

1. 中文主页:https://www.gulpjs.com.cn

2. Gulp是与Grunt类似的**`前端项目构建`**工具，也是基于Node.js的自动**`任务运行器`**

3. 能够自动地完成javascript/sass/less/html/image/css等文件的合并、压缩、检查、监听文件变化、浏览器自动刷新、测试等任务。

4. Gulp更高效（异步多任务），更易于使用，插件高质量

## Gulp 使用 

### 1. 安装 - 基本配置

1. 安装Node.js

   ```
   node -v 查看版本
   ```

2. 创建一个简单的应用gulp_test
   ```
    /- dist   （打包生成生产环境的文件）
    /- build  （打包生成开发环境的的文件） 
    /-src    -- 源代码    
      / -js   
      / -less
      / -imgs
      /- index.html
    /- gulpfile.js   配置文件     所有关于gulp的操作都要写到这个文件下
    /- package.json  
      {
          "name":"gulp_test",
          "version":"1.0.0",
          ....
      }  
   ```

3. 安装gulp  
```
  //安装全局的gulp
  npm install gulp -g
```
4. 安装局部的 gulp
```
  npm install gulp --save-dev
```
5. 配置编码:gulpfile.js

```
//引入gulp模块
const gulp = require('gulp');

//定义默认任务
gulp.task('任务名', function() {
  // 将你的任务的任务代码放在这
});
```
6. 构建命令:
```
gulp 任务名
```

### 2. gulp插件的使用

####   1. 使用gulp-jshint进行语法检查

   1. 安装插件： npm install jshint gulp-jshint --save-dev
      
   2. 引入jshint： const jshint = require('gulp-jshint')
      
   3. 定义任务:
      
        ```
            gulp.task('jshint', function() {
              // 将你的任务的任务代码放在这
              return gulp.src('./src/js/*.js')
                .pipe(jshint({
                  esversion: 6
                }))
                .pipe(jshint.reporter('default'));
            });
        ```
        
   4. 运行命令：gulp jshint 测试使用

       
####   2. 使用gulp-babel进行语法转换

   1. 安装插件： npm install --save-dev gulp-babel @babel/core @babel/preset-env

   2. 引入：const babel = require('gulp-babel');

   3. 定义任务:
       ```
       	gulp.task('babel', () =>
       	  gulp.src('./src/js/*.js')
       	    .pipe(babel({ //进行语法转换
       	      presets: ['@babel/env']
       	    }))
       	    .pipe(gulp.dest('build/js'))//输出到指定目录
       	);
       ```

   4. 运行命令：gulp babel 测试使用

####   

#### 3. 使用用browserify转换

    备注：经过babel转换后的ES6模块化语法变成了CommonJs语法，还需要用browserify转换使用gulp-browserify转换CommonJs模块化语法。

   1. 安装插件： npm install --save-dev gulp-browserify

   2. 安装插件（用于重命名）： npm install --save-dev gulp-rename

   3. 引入：const browserify = require('gulp-browserify');

   4. 引入：const rename = require('gulp-rename');

   5. 定义任务:

       ```
       	gulp.task('browserify', function() {
       	  return gulp.src('./build/js/index.js')
       	    .pipe(browserify())//将CommonJs语法转换为浏览器能识别的语法
       	    .pipe(rename('built.js'))//为了防止冲突将文件重命名
       	    .pipe(gulp.dest('build/js'))//输出到指定位置
       	});
       ```

   6. 运行命令：gulp browserify 测试使用



#### 4. 配置默认任务，让多个任务依次执行

    定义默认任务：gulp.task('default', gulp.series('jshint', 'babel', 'browserify'))



#### 5.  使用gulp-uglify压缩js

   1. 安装插件： npm install --save-dev gulp-uglify

   2. 引入插件： const uglify = require('gulp-uglify')

   3. 定义任务:

      ```
      gulp.task('uglify', function () {
      	 return gulp.src('build/js/built.js')
      				  .pipe(uglify())  //压缩js
      				  .pipe(rename('dist.min.js'))
      				  .pipe(gulp.dest('dist/js'))
      	});
      ```

   4. 运行命令：gulp uglify 测试使用	
      			

#### 6. 使用gulp-less编译less文件、及使用less-plugin-autoprefix扩展前缀

   1. 安装插件： npm install gulp-less
      
   2. 安装插件（用于扩展前缀）：npm install less-plugin-autoprefix
     
   3. 引入插件： const less = require('gulp-less');
     
   4. 引入插件：const LessAutoprefix = require('less-plugin-autoprefix')
                      const autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });     
                     
   5. 定义任务：
		
	```
	gulp.task('less', function () {
		  return gulp.src('./src/less/*.less')
		    .pipe(less({
		      plugins: [autoprefix]//自动扩展前缀
		    }))
		    .pipe(gulp.dest('./build/css'));
		});
	```
	
   6. 运行命令：gulp less 测试使用

       

#### 7.**使用gulp-concat合并css文件**

   1. 安装插件： npm install --save-dev gulp-concat
   
   2. 引入：const concat = require('gulp-concat');
   
   3. 定义任务:
	
	```
		gulp.task('concat', function() {
		 return gulp.src('./build/css/*.css')
			    .pipe(concat('built.css'))
			    .pipe(gulp.dest('./build/css'));
		});
	```

   4. 运行命令：gulp concat 测试使用

  

#### 8.**使用gulp-cssmin压缩css文件**

  1. 安装插件：npm install --save-dev gulp-cssmin
  
  2. 引入：const cssmin = require('gulp-cssmin');
  
        3. 定义任务:

       gulp.task('cssmin', function () {

    	  return gulp.src('build/css/built.css')
    	    .pipe(cssmin())
    	    .pipe(rename('dist.min.css'))
    	    .pipe(gulp.dest('dist/css'));
    	});
  4. 运行命令：gulp cssmin 测试使用

 

#### 9.**使用gulp-htmlmin压缩html文件**

  1. 安装插件：npm install --save-dev gulp-htmlmin
  
  2. 引入：const htmlmin = require('gulp-htmlmin');
  
  3. 定义任务:
```
gulp.task('htmlmin', () => {
    return gulp.src('./src/index.html')
        .pipe(htmlmin({
            collapseWhitespace: true,  //去除空格
            removeComments: true //去掉注释
        }))
        .pipe(gulp.dest('./dist'))
});
```



####  10.**使用gulp-imagemin优化图片**

  1. 安装：npm install gulp-imagemin -–save-dev

  2. 引入：const imagemin = require('gulp-imagemin');

  3. 定义任务：


```
gulp.task('imagemin', function () {
    return gulp.src('./src/img/*.{png,jpg,gif,ico}')
      .pipe(imagemin({
        optimizationLevel: 3, //类型：Number  默认：3  取值范围：0-7（优化等级）
        progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
        interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
        multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
      }))
      .pipe(gulp.dest('dist/img'));
  });
```
4. 运行命令：gulp imagemin 测试使用



#### 11.**自动化配置:**

   1. 安装如下模块：  
   
   //gulp-livereload 自动刷新
   //gulp-connect：创建服务
   //opn：自动打开浏览器
   ```
    npm install gulp-livereload --save-dev  npm install gulp-connect --save-dev  npm install open --save-dev
   ```
   2. 引入如下模块：
```
    const livereload = require('gulp-livereload');
    const connect = require('gulp-connect');
    const open = require('open');
```

   3. 自动执行任务，编译代码
   ```
   gulp.task('watch', function() {
      	//1. 在所有可能要执行任务后面加上 .pipe(livereload());
      	//2. 配置watch任务
     		livereload.listen();
     	//通过自己服务器打开项目，自动刷新
   	  	connect.server({
   		    root: 'dist',
   		    port: 3000,
   		    livereload: true  // 自动刷新
   	  	});
       //自动打开浏览器
       	open('http://localhost:3000/index.html');
       //监视指定文件（第一个参数），一旦文件发生变化，就自动执行后面的任务（第二个参数）
         gulp.watch('src/less/*.less', gulp.series(['less','concat','cssmin']));
         gulp.watch('./src/js/*.js', gulp.series(['jshint','babel','browserify','uglify']));
         gulp.watch('./src/index.html', gulp.series('htmlmin'));
   });

   ```
   **备注：必须要在src文件夹中修改index.html中引入样式和脚本的路径，gulp不会自动处理路径。**
    相关插件:
    ---------------------------------------------------------------------------------
    gulp-concat : 合并文件(js/css)
    gulp-uglify : 压缩js文件
    gulp-rename : 文件重命名
    gulp-less : 编译less
    gulp-clean-css : 压缩css
    gulp-livereload : 实时自动编译刷新
    -----------------------------------------------------------------------------------
​    重要API
​    gulp.src(filePath/pathArr) :指向指定路径的所有文件, 返回文件流对象,用于读取文件
​    gulp.dest(dirPath/pathArr) :指向指定的所有文件夹,用于向文件夹中输出文件
​    gulp.task(name, [deps], fn): 定义一个任务
​    gulp.watch():监视文件的变化

----------------------------------------------------------------------------------------

警告处理:Did you forget to signal async completion ? （你是不是忘记在异步任务完成发出一个信号？）

1. 任务的回调函数中传递一个参数，当任务全部处理完毕时调用

2. 使用async和await
3. 返回一个stream

​    ...
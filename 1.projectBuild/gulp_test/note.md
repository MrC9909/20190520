### 回顾：gulp
//所有的配置都要写到gulpfile文件当中

1. 基于流的自动化构建工具
2. 基于流和异步构建  (不支持同步的)
    - 下载插件
     ````
        $ npm install  xxx -D
     ````
    - 引入插件
        ```
        const xxx = require('xxx');
```
    - 配置插件任务
    gulp.task('name',()=>{
        return gulp.src('文件的路径地址') 
               .pipe(语法检查)
               .pipe(编译)
               .pipe(压缩)
               ...
               .pipe(gulp.dest('导出的路径和名称'))
    });
    - 执行任务
    gulp 任务名称
    - 配置默认任务
    gulp('default',gulp.series('任务名称1'，'任务名称1'，....))

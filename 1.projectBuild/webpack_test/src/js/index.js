//统一导入
import {add,ride} from './module1';

//默认导入
import sum from './module2';

//只有js需要暴露
//导入资源文件不用导出直接导入
import datajson from '../json/data';

//导入less文件 直接是资源路径
import '../less/test1.less';
import '../less/test2.less';

console.log(add(1, 2));
console.log(ride(1, 2));
console.log(sum(1, 2, 3, 4, 5));
console.log(add(1, 2));
console.log(ride(1, 2));
console.log(sum(1, 2, 3, 4, 5));
console.log(datajson);
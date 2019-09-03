# REACT

## 1.React入门

### 1.1 React基本认识

```
1). Facebook开源的一个js库
2). 一个用来动态构建用户界面的js库
3). React的特点
	Declarative(声明式编码)
	Component-Based(组件化编码)
	Learn Once, Write Anywhere(支持客户端与服务器渲染)
	高效
	单向数据流
4). React高效的原因
	虚拟(virtual)DOM, 不总是直接操作DOM(批量更新, 减少更新的次数) 
	高效的DOM Diff算法, 最小化页面重绘(减小页面更新的区域)
```



### 1.2 React的基本使用

###### 	1.使用方式

```
1). 导入相关js库文件(react.js, react-dom.js, babel.min.js)
2). 编码:
	<div id="container"></div>
	<script type="text/babel">
		var aa = 123；
		var bb = 'test'
		ReactDOM.render(<h1 id={bb}>{aa}</h1>, containerDOM)
	</script>
```

###### 	2.练习:输出HELLO WORLD

​			[HELLO WORLD](./MEDIA/CODE/1.helloWorld/1.helloWorld.html)

### 1.3 JSX的理解和使用

###### 1.3.1 理解

```
 全称: JavaScript XML
- react定义的一种类似于XML的JS扩展语法: XML+JS
- 作用: 用来创建react虚拟DOM(元素)对象
```

练习:[I like you](./MEDIA/CODE/2.REACT-JSX/1.test.html)

###### 1.3.2 虚拟DOM

```
1)React提供了一些API来创建一种 `特别` 的一般js对象
	a.var element = React.createElement('h1', {id:'myTitle'},'hello')
	b.上面创建的就是一个简单的虚拟DOM对象
2)虚拟DOM对象最终都会被React转换为真实的DOM
3)我们编码时基本只需要操作react的虚拟DOM相关数据, react会转换为真实DOM变化而更新界面
```

###### 1.3.3  编码相关

```
  js中直接可以套标签, 但标签要套js需要放在{}中
  {}:大括号中放的是js表达式,必须有返回值
  可以是基本数据类型的值，null和undefined是''
  不能是对象 （给jsx元素增加style除外，需要放一个对象）
  不支持循环或判断
  在解析显示js数组时（数组中必须是基本数据类型的值）, 会自动遍历显示
  把数据的数组转换为标签的数组: 
  var liArr = dataArr.map(function(item, index){
  	return <li key={index}>{item}</li>
  })

注意:
  标签必须有结束
  标签的class属性必须改为className属性
  标签的style属性值必须为: {{color:'red', width:12}}
```

###### 练习: 动态展示列表数据

[动态列表展示](./MEDIA/CODE/2.REACT-JSX/2.demo.html)

### 1.4 几个重要概念理解

##### 		1.4.1 模块与组件

```
1. 模块:
  	理解: 向外提供特定功能的js程序, 一般就是一个js文件
  	为什么: js代码更多更复杂
  	作用: 复用js, 简化js的编写, 提高js运行效率
2. 组件: 
	理解: 用来实现特定界面功能效果的代码集合(html/css/js/img)
  	为什么: 一个界面的功能太复杂了
  	作用: 复用编码, 简化项目界面编码, 提高运行效率
```

##### 		1.4.2 模块化与组件化

```
1. 模块化:
	当应用的js都以模块来编写的, 这个应用就是一个模块化的应用
2. 组件化:
	当应用是以多组件的方式实现功能, 这上应用就是一个组件化的应用
```



## 2.react组件化开发

### 	2.1 基本理解

```
1)理解: 用来实现特定(局部)界面功能效果的代码集合(html/css/js/image)
2)为什么: 一个界面的功能更复杂
3)作用: 复用编码, 简化项目编码, 提高运行效率
```

### 	2.2 自定义组件

#### 		2.3.1 函数式组件			

```
/*	方式1: 无状态 函数(简单组件）*/
	function MyComponent1(props) {
		return <h1>自定义组件标题11111</h1>
	}
```

#### 		2.3.2 类组件

```
/*方式2:  ES6类组件(有状态/复杂组件)*/
class MyComponent2 extends React.Component {
render () { // 重写方法
  console.log(this) // MyComponent2的实例对象
  return <h2>ES6类组件(复杂组件)</h2>
}
```

#### 		2.3.3 注意

```
1)组件名必须首字母大写
2)虚拟DOM元素只能有一个根元素
3)虚拟DOM元素必须有结束标签
```

#### 练习:[使用两种方式定义组件](./MEDIA/CODE/3.component_base/test.html)



### 2.2  组件的3大属性

#### 		2.2.1  state (状态)

```
1. 组件被称为"状态机", 页面的显示是根据组件的state属性的数据来显示
2. 初始化指定:
    constructor() {
      super()
      this.state = {
        stateName1 : stateValue1,
        stateName2 : stateValue2
      }
    }
3. 读取显示: 
    this.state.stateName1
4. 更新状态-->更新界面 : 
    this.setState({stateName1 : newValue})
```

#### 	练习:[I LIKE YOU](./MEDIA/CODE/04.component_state/test_优化编码.html)



#### 	2.2.2  props（属性）

```
1.所有组件标签的属性的集合对象
给标签指定属性, 保存外部数据(可能是一个function)
在组件内部读取属性: this.props.propertyName
作用: 从目标组件外部向组件内部传递数据

组件的属性是只读的：只能调取组件时候传递进来，不能自己在组件内部修改（但是可以设置默认值和规则）

对props中的属性设置默认值
Person.defaultProps = {
	name: 'Mary'
}

对props中的属性值进行类型限制和必要性限制
	Person.propTypes = {
		name: React.PropTypes.string.isRequired,
		age: React.PropTypes.number.isRequired
	}
扩展属性: 将对象的所有属性通过props传递
  <Person {...person}/>
```

#### 练习:[自定义显示人员信息](./MEDIA/CODE/05_component_props/test.html)



#### 		2.2.3 refs（组件的DOM操作）

```
1.组件内包含ref属性的标签元素的集合对象
给操作目标标签指定ref属性, 打一个标识
在组件内部获得标签对象: this.refs.refName(只是得到了标签元素对象)
作用: 找到组件内部的真实dom元素对象, 进而操作它
```

#### 	练习:[自定义](./MEDIA/CODE/06_component_refs_event/test.html)

```
需求: 自定义组件, 功能说明如下:
      1. 界面如果页面所示
      2. 点击按钮, 提示第一个输入框中的值
      3. 当第2个输入框失去焦点时, 提示这个输入框中的值
```



### 2.3  组件中的事件处理

```
1.事件绑定
	<button onClick={this.andleClic}></button>
2.事件的this问题
	（1）箭头函数的方式
			andleClic = ()=>{
		
			}
		(2) constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // 为了在回调中使用 `this`，这个绑定是必不可少的
    this.handleClick = this.handleClick.bind(this);
  	}	
  
  	andleClic(){
  	
  	}
 3.事件对象 	
```



### 	2.4 组件的组合使用

```
1)拆分组件: 拆分界面,抽取组件
2)实现静态组件: 使用组件实现静态页面效果
3)实现动态组件
	①　动态显示初始化数据
	②　交互功能(从绑定事件监听开始)
```

### 	练习[TODOS](../MEDIA/CODE/07_components_todos/test.html)

### 	作业(选作):投票案例

```
用两种方式实现投票案例	点击支持增加支持人数 点击反增加反对人数。并计算支持率 
1.投票案例之数据驱动
2.投票案例之DOM操作
```

[VOTE](./MEDIA/VOTE.png)

### 	2.5 组件收集表单数据

案例:[表单数据收集](./MEDIA/CODE/08_component_form/test.html)

```
受控组件: 输入过程中自动收集数据
非受控组件: 提交时手动读取数据 
```



### 2.6 组件的生命周期

案例:[自定义组件](./MEDIA/CODE/09_component_lifecycle/test.html)

```
需求: 自定义组件
  1. 让指定的文本做显示/隐藏的渐变动画
  2. 切换持续时间为2S
  3. 点击按钮从界面中移除组件界面
```



```
1. 组件的三个生命周期状态:
	Mount：插入真实 DOM
	Update：被重新渲染
	Unmount：被移出真实 DOM
2. 生命周期流程:
	* 第一次初始化显示: ReactDOM.render(<Xxx/>, containDom)
		constructor()
		componentWillMount() : 将要插入回调
		render() : 用于插入虚拟DOM回调
		componentDidMount() : 已经插入回调
	* 每次更新state: this.setState({})
	    componentWillReceiveProps(): 接收父组件新的属性
	    componentWillUpdate() : 将要更新回调
	    render() : 更新(重新渲染)
	    componentDidUpdate() : 已经更新回调
	* 删除组件: ReactDOM.unmountComponentAtNode(div): 移除组件
		componentWillUnmount() : 组件将要被移除回调
3. 常用的方法
	render(): 必须重写, 返回一个自定义的虚拟DOM
  	constructor(): 初始化状态(state={}), 绑定this(可以箭头函数代替)
  	componentDidMount() : 只执行一次, 已经在dom树中, 适合启动/设置一些监听
```

[生命周期表](MEDIA/component-life.png)



### 	2.7  虚拟DOM与DOM diff算法

#### 		2.7.1 虚拟DOM是什么?

```
一个虚拟DOM(元素)是一个一般的js对象, 准确的说是一个对象树(倒立的)
虚拟DOM保存了真实DOM的层次关系和一些基本属性，与真实DOM一一对应
如果只是更新虚拟DOM, 页面是不会重绘的
```

#### 		2.7.2 Virtual DOM 算法的基本步骤

```
用JS对象树表示DOM树的结构；然后用这个树构建一个真正的DOM树插到文档当中
当状态变更的时候，重新构造一棵新的对象树。然后用新的树和旧的树进行比较，记录两棵树差异
把差异应用到真实DOM树上，视图就更新了
```

#### 		2.7.3 进一步理解

```
Virtual DOM 本质上就是在 JS 和 DOM 之间做了一个缓存。
可以类比 CPU 和硬盘，既然硬盘这么慢，我们就在它们之间加个缓存：既然 DOM 这么慢，我们就在它们 JS 和 DOM 之间加个缓存。CPU（JS）只操作内存（Virtual DOM），最后的时候再把变更写入硬盘（DOM）。
```

[虚拟DOM渲染为真实DOM](./MEDIA/虚拟DOM.png)

### 	2.8. 命令式编程,函数式编程与声明式编程

```
声明式编程
	*声明式编程
		专注于”做什么”而不是”如何去做”。在更高层面写代码，更关心的是目标，而不是底层算法实现的过程.
  *命令式编程（过程式编程）
		专注于”如何去做”，这样不管”做什么”，都会按照你的命令去做。解决某一问题的具体算法实现。
	*函数式编程：
		把运算过程尽量写成一系列嵌套的函数调用

	

var arr = [1, 3, 5, 7]
// 需求: 得到一个新的数组, 数组中每个元素都比arr中对应的元素大10: [11, 13, 15, 17]
// 命令式编程
var arr2 = []
for(var i =0;i<arr.length;i++) {
	arr2.push(arr[i]+10)
}
console.log(arr2)

//函数式编程：
function printMessage(elementId, format, message) {
    document.querySelector(elementId).innerHTML = `<${format}>${message}</${format}>`
}
printMessage('msg', 'h1', 'Hello World')


//声明式编程
var arr3 = arr.map(function(item){
	return item +10
})
// 声明式编程是建立命令式编程的基础上
// 数组中常见声明式方法
	map() / forEach() / find() ...
```



## 3.REACT脚手架

### 	3.1 什么是脚手架

```
1. xxx脚手架: 用来帮助程序员快速创建一个基于xxx库的模板项目
	* 包含了所有需要的配置
	* 指定好了所有的依赖
	* 可以直接安装/编译/运行一个简单效果
2. react提供了一个专门用于创建react项目的脚手架库: create-react-app
3. 项目的整体技术架构为: react + webpack + es6  + babel + eslint
```

### 	3.2 create-react-app		

```
1.>$ npm install create-react-app -g
    把模块安装在全局环境下（目的：可以使用命令），MAC电脑安装的时候，前面需要加SUDO，否则没有权限

2.>$ create-react-app [项目名称]
基于脚手架命令，创建出一个基于React的自动化/工程化项目目录，和npm发包时候的命名规范一样，项目名称中不能出现：大写字母、中文汉字、特殊符号（-或者_是可以的）等
```

### 	3.3 脚手架生成目录中的一些内容

##### 		1 .node_modules  

​		当前项目中依赖的包都安装在这里

​		 .bin  本地项目中可执行命令，在package.json的scripts中配置对应的脚本即可（其中有一个就是：react-scripts命令）

##### 		2.public 

​			存放的是当前项目的HTML页面（单页面应用放一个index.html即可，多页面根据自己需求放置需要的页面）

```
 在REACT框架中，所有的逻辑都是在JS中完成的（包括页面结构的创建），如果想给当前的页面导入一些CSS样式或者IMG图片等内容，我们有两种方式：
           1.在JS中基于ES6 Module模块规范，使用import导入，这样webpack在编译合并JS的时候，会把导入的资源文件等插入到页面的结构中（绝对不能在JS管控的结构中通过相对目录./或者../，导入资源，因为在webpack编译的时候，地址就不在是之前的相对地址了）
           2.如果不想在JS中导入（JS中导入的资源最后都会基于WEBPACK编译），我们也可以把资源手动的在HTML中导入，但是HTML最后也要基于WEBPACK编译，导入的地址也不建议写相对地址，而是使用 %PUBLIC_URL% 写成绝对地址
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
        <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
```



##### 		3.src 

​			项目结构中最主要的目录，因为后期所有的JS、路由、组件等都是放到这里面（包括需要编写的CSS或者图片等）

​			index1.js 是当前项目的入口文件

##### 		4. .gitignore

​			Git提交时候的忽略提交文件配置项

##### 		5.package.json

​			当前项目的配置清单

```
"dependencies": {
       "react": "^16.4.1",
       "react-dom": "^16.4.1",
       "react-scripts": "1.1.4"
   }
   
   基于脚手架生成工程目录，自动帮我们安装了三个模块：react/react-dom/react-scripts
   react-scripts集成了webpack需要的内容
      ->Babel一套
      ->CSS处理的一套
      ->eslint一套
      ->webpack一套
      ->其它的
   没有less/sass的处理内容（项目中使用less，我们需要自己额外的安装）

   ----

   "scripts": {
       "start": "react-scripts start",
       "build": "react-scripts build",
       "test": "react-scripts test --env=jsdom",
       "eject": "react-scripts eject"
   }
   可执行的脚本“$ npm run start / $ yarn start”
      start：开发环境下，基于webpack编译处理，最后可以预览当前开发的项目成果（在webpack中安装了webpack-dev-server插件，基于这个插件会自动创建一个WEB服务[端口号默认是3000]，webpack会帮我们自动打开浏览器，并且展示我们的页面，并且能够监听我们代码的改变，如果代码改变了，webpack会自动重新编译，并且刷新浏览器来完成重新渲染）

      build：项目需要部署到服务器上，我们先执行 yarn build，把项目整体编译打包（完成后会在项目中生成一个build文件夹，这个文件夹中包含了所有编译后的内容，我们把它上传到服务器即可）;而且在服务上进行部署的时候，不需要安装任何模块了（因为webpack已经把需要的内容都打包到一个JS中了）
      项目打包运行：
      npm run build  //生成打包文件
      npm install -g serve  //全局下载服务器包
      serve build  //通过服务器命令运行打包项目
      访问: http://localhost:5000  //浏览器访问
```



##### 综合案例

案例一:脚手架练习

案例二:[REACT评论](./MEDIA/CODE/10.react-comments/index.html)



## 4.react ajax

### 4.1 前置说明

```
1)React本身只关注于界面, 并不包含发送ajax请求的代码
2)前端应用需要通过ajax请求与后台进行交互(json数据)
3)react应用中需要集成第三方ajax库(或自己封装)
```



### 4.2 常用的ajax请求库

```
1)jQuery: 比较重, 如果需要另外引入不建议使用
2)axios: 轻量级, 建议使用
  a.封装XmlHttpRequest对象的ajax
  b. promise风格
  c.可以用在浏览器端和node服务器端
3)fetch: 原生函数, 但老版本浏览器不支持
  a.不再使用XmlHttpRequest对象提交ajax请求
  b.为了兼容低版本的浏览器, 可以引入兼容库fetch.js
```



### 4.3 效果

[效果](./MEDIA/ajax.gif)

```
需求:
  1. 界面效果如下
  2. 根据指定的关键字在github上搜索匹配的最受关注的库
  3. 显示库名, 点击链接查看库
4. 测试接口: https://api.github.com/search/repositories?q=r&sort=stars
```



### 4.4 axios

#### 	4.4.1 文档

```
https://github.com/axios/axios
```

#### 	4.2.2. 相关API

##### 	1. GET请求

```
axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });

axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

```

##### 2.POST请求

```
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});
```

### 4.5 Fetch

#### 4.5.1 文档

```
1)https://github.github.io/fetch/
2)https://segmentfault.com/a/1190000003810652
```

#### 4.5.2 相关API

##### 1.GET请求

```
fetch(url).then(function(response) {
  return response.json()
}).then(function(data) {
  console.log(data)
}).catch(function(e) {
  console.log(e)
});
```

##### 2.POST请求

```
fetch(url, {
  method: "POST",
  body: JSON.stringify(data),
}).then(function(data) {
  console.log(data)
}).catch(function(e) {
  console.log(e)
})
```



### 4.6 demo: github用户搜索

[用户搜索](./MEDIA/demo_users.gif)



## 5.组件间通信总结

### 	4.1 复合组件：父组件嵌套子组件

#### 	4.1.1 父组件需要把信息传递给子组件

###### 	 4.1.1.1 属性传递

​		调取子组件的时候，把信息基于属性的方式传递给子组件（子组件PROPS中存储传递的信息）;这种方式只能父组件把信息传递子组件，子组件无法直接的把信息传递给父组件，也就是属性传递信息是单向传递的；							

```
   export default class Vote extends React.Component {
       render() {
           let {title, count} = this.props;
           return <section className={'panel panel-default'} style={{width: '50%', margin: '20px auto'}}>
               <VoteHead title={title}/>
               ...
           </section>;
       }
   }
```

###### 		4.1.1.2 上下文传递

​		父组件先把需要给后代元素（包括孙子元素）使用的信息都设置好（设置在上下文中），后代组件需要用到父组件中的信息，主动去父组件中调取使用即可

​	

```
  //=>父组件设置信息
  static childContextTypes = {
      //=>设置上下文中信息值的类型
      n: PropTypes.number,
      m: PropTypes.number
  };
  getChildContext() {
      //->RETURN的是啥，相当相当于往上下文中放了啥
      let {count: {n = 0, m = 0}} = this.props;
      return {
          n,
          m
      };
  }

  //=>子组件主动获取需要的信息
  static contextTypes = {
      //=>首先类型需要和设置时候类型一样，否则报错；并且你需要用啥，就写啥即可；
      n: PropTypes.number,
      m: PropTypes.number
  };
```



###### 		4.1.1.3 属性 VS 上下文

1. 属性操作起来简单，子组件是被动接收传递的值（组件内的属性是只读的），只能父传子（子传父不行，父传孙也需要处理：父传子，子再传孙）；
2. 上下文操作起来相对复杂一些，子组件是主动获取信息使用的（子组件是可以修改获取到的上下文信息的，但是不会影响到父组件中的信息，其它组件不受影响）,一旦父组件设置了上下文信息，它后代组件都可以直接拿来用，不需要一层层的传递；



###### 		4.1.1.4 子组件也能修改父组件中的信息

​		利用回调函数机制：父组件把一个函数通过属性或者上下文的方式传递给子组件，子组件中只要把这个方法执行即可（也就是子组件中执行了父组件方法，还可以传递一些值过去），这样父组件在这个方法中，想把自己的信息改成啥就改成啥



### 	4.2 平行组件  兄弟组件或者毫无关系的两个组件

#### 		4.2.1  方案一：让两个平行组件拥一个共同的父组件	

```
  父：Parent
   子：A / B
   父组件中有一些信息，父组件把一个方法传递给A，A中把方法执行（方法执行修改父组件信息值），父组件再把最新的信息传递给B即可，等价于A操作，影响了B
```

### 	4.3  任意关系组件之间的通信

#### 			4.3.1使用消息订阅(subscribe)-发布(publish)机制: 自定义事件机制

```
工具库: PubSubJS
下载: npm install pubsub-js --save
使用: 
  import PubSub from 'pubsub-js' //引入
  PubSub.subscribe('delete', function(msg, data){ }); //订阅
  PubSub.publish('delete', data) //发布消息
优点: 可以支持任意关系组件之间的通信
```

#### 			4.3.2基于REDUX来进行状态管理，实现组件之间的信息传输（常用方案）

  REDUX可以应用在任何的项目中（VUE/JQ/RERACT的都可以），REACT-REDUX才是专门给REACT项目提供的方案



## 6.react-router-dom

### 	5.1 理解react-router-dom

```
react的一个插件库
专门用来实现一个SPA应用
基于react的项目基本都会用到此库
```

### 	5.2  SPA应用 和 MPA理解

​		[REACT-ROUTER](./MEDIA/REACT-ROUTER.html)

### 	5.3  路由

```
1. 什么是路由?
	一个路由就是一个映射关系(key:value)
	key为路由路径, value可能是function/component
2. 路由分类
	后台路由: node服务器端路由, value是function, 用来处理客户端提交的请求并返回一个响应数据
	前台路由: 浏览器端路由, value是component, 当请求的是路由path时, 浏览器端前没有发送http请求, 但界面会更新显示对应的组件 
3. 后台路由
	* 注册路由: router.get(path, function(req, res))
	* 当node接收到一个请求时, 根据请求路径找到匹配的路由, 调用路由中的函数来处理请求, 返回响应数据
* 前端路由
	* 注册路由: <Route path="/about" component={About}>
	* 当浏览器的hash变为#about时, 当前路由组件就会变为About组件
```

### 	5.4 关于url中的#

```
1. 理解#
	'#'代表网页中的一个位置。其右面的字符，就是该位置的标识符
	改变#不触发网页重载
	改变#会改变浏览器的访问历史
2. 操作#
	window.location.hash读取#值
	window.onhashchange = func 监听hash改变
```

### 	5.5 相关API

#### 	 5.5.1 react-router-dom安装

```
1.$> npm install react-router-dom/yarn add react-router-dom
2.3及以前版本为react-router 4及最新版本为react-router-dom
3.REACT-ROUTER中提供的组件都要在任何一个ROUTER（HASH-ROUTER）包裹的范围内使用
```

#### 	5.5.2 BrowserRouter vs HashRouter

​	 它是两种常用的路由实现思想，BrowserRouter浏览器路由，HashRouter哈希路由

##### 	BrowserRouter 

```
[BrowserRouter]
它是基于H5中history API(pushState, replaceState , popstate)来保持UI和URL的同步，真实项目中应用的不多，一般只有当前项目是基于服务器端渲染的，我们才会使用浏览器路由
 http://www.demo.com/
 http://www.demo.com/peraonal/
 http://www.demo.com/peraonal/login/
 
```

##### 	HashRouter

```
[HashRouter]
 *     真实项目中（前后端分离的项目：客户端渲染），我们经常使用的是哈希路由来完成的，它依据相同的页面地址，不同的哈希值，来规划当前页面中的哪一个组件呈现渲染，它基于原生JS构造了一套类似于history API的机制，每一次路由切换都是基于 history stack 完成的！
 *     http://www.demo.com/#/
 *     http://www.demo.com/#/peraonal
 *     http://www.demo.com/#/peraonal/login
```

#### 	5.5.3 ROUTE   路由组件

```
	属性
    PATH：设置匹配地址，但是默认不是严格匹配，当前页面哈希地址只要包含完整的它（内容是不变的），都能被匹配上
        PATH='/' ：和它匹配的地址只有要斜杠即可（都能和它匹配）
        PATH='/user'：“#/user/login”也可以匹配，但是“#/user2”这个无法匹配

    COMPONENT：一但哈希值和当前ROUTE的PATH相同了，则渲染COMPONENT指定的组件

    EXACT：让PATH的匹配严谨和严格一些（只有URL哈希值和PATH设定的值相等才可以匹配到）
        PATH='/'：“#/”匹配，但是“#/user”就不再匹配了

    STRICT

    RENDER：当页面的哈希地址和PATH匹配，会把RENDER规划的方法执行，在方法中一般做“权限校验”（渲染组件之前验证是否存在权限，不存在做一些特殊处理）
```



#### 	5.5.4 Link/NavLink: 路由链接

###### 		Link:是REACT-ROUTER中提供的路由切换组件，基于它可以实现点击时候路由的切换

```
属性
		TO [STRING]：跳转到指定的路由地址
    TO [OBJECT]：可以提供一些参数配置项（和REDIRECT类似）
       {
         PATHNAME：跳转地址
         SERACH：问号传参
         STATE：基于这种方式传递信息
       }
     REPLACE:FALSE  是替换HISTORY STACK中当前的地址（TRUE），还是追加一个新的地址（FALSE）
 
   原理：基于LINK组件渲染，渲染后的结果就是一个A标签，TO对应的信息最后变为HREF中的内容                     		<a class="navbar-brand" href="#/?lx=logo">IT硅谷</a>
```

###### 		 NavLink:和LINK类似，都是为了实现路由切换跳转的，不同在于，NAV-LINK组件在当前页面HASH和组件对应地址相吻合的时候，会默认给组件加一个ACTIVE样式，让其有选中态

```
属性:
		 和LINK类似，TO和REPLACE等属性都有，用法一样
	   activeClassName：把默认加的active样式类改为自己设定的
     activeStyle：给匹配的这个NAV-LINK设置行内样式
     exact & strict控制匹配的时候是否是严格匹配
     isActive：匹配后执行对应的函数
```



#### 	5.5.5 WITH-ROUTER   

​	这个方法意思是把一个非路由管控的组件，模拟成为路由管控的组件

```
 <ROUTE PATH='/' COMPONENT={NAV}/> 受路由管控的组件
 WITH-ROUTER(CONNECT()(NAV)) 先把NAV基于CONNECT高阶一下，返回的是一个代理组件PROXY，把返回的代理组件受路由管控
```

#### 	5.5.6 路由组件的3个props

match: 包含请求参数
history: 提供实现编程式路由跳转的方法
location: 包含请求路径

```
所有受路由管控的组件，在组件的属性PROPS上都默认添加了三个属性：
     HISTORY
         PUSH  向池子中追加一条新的信息，达到切换到指定路由地址的目的
               this.props.history.push('/plan') JS中实现路由切换
         GO    跳转到指定的地址（传的是数字 0当前 -1上一个 -2上两个...）
         GO-BACK  <=> GO(-1) 回退到上一个地址
         GO-FORWARD <=> GO(1) 向前走一步
         ...
      LOCATION 获取当前哈希路由渲染组件的一些信息
         PATHNAME：当前哈希路由地址   /custom/list
         SEARCH：当前页面的问号传参值  ?lx=unsafe
    		 STATE：基于REDIRECT/LINK/NAV-LINK中的TO，传递是一个对象，对象中编写的STATE，就可以在		LOCATION.STATE中获取到
 
      MATCH  获取的是当前路由匹配的一些结果
     		 PARAMS：如果当前路由匹配的是地址路径参数，则这里可以获取传递参数的值
```



#### 5.5.7  编程式路由导航

```
history.push(path)
history.replace(path)
history.goBack(path)
```



### [综合效果](./MEDIA/react-router demo.gif)



## 7.Ant Design使用入门

`antd` 是基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品（国内蚂蚁金服）



### 7.1 ant-design安装

```
yarn add antd
```

### 7.2 ant-design基本使用

1. App.js

```
import React, {Component} from 'react'
import {Button, message} from 'antd'

class App extends Component {

  handleClick = () => {
    message.info('点击了')
  }
  
  render() {
    return (
      <div className="App">
        <Button type="primary" onClick={this.handleClick}>Button</Button>
      </div>
    );
  }
}
export default App
```

2. index1.js

```
// 引入antd整个css
import 'antd/dist/antd.min.css'
```



3. 问题

需要手动引入样式

会打包antd所有组件的js/css



### 7.3 实现antd的按需打包及自定义主题 (no eject)

#### 7.3.1实现组件的按需打包

1.下载依赖模块

```
yarn add react-app-rewired@1.6.2 babel-plugin-import -D
```

2.定义加载配置的js模块: config-overrides.js

```
const {injectBabelPlugin} = require('react-app-rewired')

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ['import', {libraryName: 'antd', libraryDirectory: 'es', style: 'css'}],
    config,
  )
  return config
}
```



3. 修改配置: package.json

   ```
   "scripts": {
     "start": "react-app-rewired start",
     "build": "react-app-rewired build",
     "test": "react-app-rewired test",
     "eject": "react-scripts eject"
   }
   ```

4. 去除样式的引入: index1.js

   

#### 7.3.2 解决打包异常

#####  7.3.2.1 问题1 

###### 1.错误

[问题](.//MEDIA/图片4.png)

###### 2. 原因 

react-app-rewired的版本高(2.0.1)了, 不兼容

###### 3. 解决

卸载后下载一个低点的版本(1.6.2)

```
yarn remove react-app-rewired
yarn add react-app-rewired@1.6.2 -D
```

#####  7.3.2.1 问题2:

###### 1  错误

[错误](./MEDIA/图片4.png)

###### 2 原因

react-scripts的版本高(2.1.3)了, 不兼容

###### 3 解决

卸载后下载一个低点的版本(2.1.1)

```
yarn remove react-scripts
yarn add react-scripts@2.1.1 -D
```



#### 7.5自定义antd主题 

##### 7.5.1  需求: 使antd的默认基本颜色从Blue变为Green

##### 7.5.2 实现 下载工具包

```
yarn add react-app-rewire-less -D
```

##### 7.5.3 修改config-overrides.js

```
const rewireLess = require('react-app-rewire-less')
const {injectBabelPlugin} = require('react-app-rewired');

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ['import', {libraryName: 'antd', libraryDirectory: 'es', style: true}],
    config,
  );

  config = rewireLess.withLoaderOptions({
    modifyVars: {"@primary-color": "#1DA57A"},
    javascriptEnabled: true,
  })(config, env);

  return config;
};
```



#### 7.5.4 测试



### 7.4 实现antd的按需打包及自定义主题 (eject)

##### 7.4.1  前言

```
react项目，yarn eject后暴露出webpack版本为
"webpack": "4.19.1", "webpack-dev-server": "3.1.14",
相对于以前的 "webpack": "3.8.1","webpack-dev-server": "2.9.4",有大的不同，
其中将以前的webpack.config.dev.js和webpack.config.prod.js合并成webpack.config.js。
现在我们来对比下如何在新的"webpack": "4.19.1"中添加less-loader，并且通过插件babel-plugin-import实现antd的按需加载。
```

##### 7.4.2  实现antd的按需打包及自定义主题

###### 1.安装babel-plugin-import 和less-loader

```
$> yarn add babel-plugin-import
$> yarn add antd
$> yarn add less less-loader
```

###### 2.修改package.json：添加antd库的样式

```

 "babel": {
    "presets": [
      "react-app"
    ],
    "plugins": [
      [
        "import",
        {
          "libraryName": "antd",
          "style": "css"
        }
      ]
    ]
```



###### 3.配置less-lessloader

###### 4.定制主题

```

//@To-Do 注释原来内容  
// if (preProcessor) {
  //   loaders.push(require.resolve(preProcessor));
  // }
 
//@To-do 新添加内容
  if (preProcessor) {
    let loader = require.resolve(preProcessor)
    if (preProcessor === "less-loader") {
      loader = {
        loader,
        options: {
          modifyVars: { //自定义主题
            'primary-color':' #1890ff ',
          },
          javascriptEnabled: true,
        }
      }
    }
    loaders.push(loader);
  }
  
  return loaders;
```

4.复制代码修改package.json

```
 "babel": {
    "presets": [
      "react-app"
    ],
    "plugins": [
      [
        "import",
        {
          "libraryName": "antd",
          "style": true  //修改处
        }
      ]
    ]
  }
```





## 8.react配置多个代理,跨域

### 1.安装http-proxy-middleware管理包

```
cnpm install/yarn add http-proxy-middleware --save
```

### 2.在项目目录src/下新建setupProxy.js文件，然后写入如下代码

```
const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  // ...You can now register proxies as you wish!
  app.use(proxy('/api', { 
    target: 'http://172.19.5.35:9536',
    secure: false,
    changeOrigin: true,
    pathRewrite: {
     "^/api": "/"
    },
   }));
   app.use(proxy('/apc', { 
    target: 'http://172.19.5.34:9531',
    secure: false,
    changeOrigin: true,
    pathRewrite: {
     "^/apc": "/"
    },
   }));
  //app.use(proxy('/apc', { target: 'http://172.19.5.34:9531' }));
};
```


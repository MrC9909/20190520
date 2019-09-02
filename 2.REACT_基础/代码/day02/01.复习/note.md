### REACT
 1. 介绍REACT
        概念：用于构建用户界面JavaScript库
        特点：声明式   组件化   一次编码导出使用（ReactNative）混合开发
        
 2. JSX：JavaScript XML   REACT独有的一个语法
           规范：它不是一个字符串，并且可以是我们HTML标签和其它标签
                JSX的属性可以是当前的标签属性也可以是自定义属性
                JSX语法是React.createElement的一个语法糖
                JSX语法中如果要使用JS表达式我们需要用{}抱起来
           关于{}中存放JS表达式的规范：
                可以存储基本数据类型的值
                可以是数组但是要求数组中存放都是基本数据类型的值
                不能是对象，但是对于JSX中标签属性style除外
                不能够识别if for，但是可以识别三元表达式是可以的
                可以是函数                
           RENDER的渲染机制（流程）
                我们在去调用render方法的时候是将当前JSX语法或者组件渲染到页面当中，内置会调用React.createElement，一但调用这个方法就会返回一个对象，将这个对象同过正则匹配最终转化为真实DOM元素。
           组件的定义：
                函数式: 简单，性能比较高，但是不能做一些复杂的操作，函数式组件定义的时候是什么样渲染出来就是什么样，不能够动态更改
             
                ```
                    function Like(){
                        return <h2></h2>;
                    }
                ```
       类的方式 ：
       ```
       class 类名（首字母必须大写）extends React.Component{
               constructor(){
                    super();   
               } 
               
               render(){ //渲染当前组件的界面
                    
               }
                
       }
       
       ReactDOM.render(<div>
            <Like/>
            <Hello/>
       </div>,);  //渲染当前组件到视图当中

       ```   
    组件的三大属性：
        1. state 状态  初始化数据  setState();  用来修改state,一旦修改就会调用render方法重新渲染当前组件内容
        2.props:属性集合   我们在去调用组件的时候自己传递的属性的集合
              特点：是只读的不能修改
                    设置默认属性和规则
             
                      
                
                   
                       
        
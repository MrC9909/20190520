import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
//导入axios库
import axios from 'axios';

class Ajax extends Component{
    //初始化状态
    state = {
        //当前最受欢迎的库的名称
        respoName:'',
        respoUrl:''
    };
    //界面初始化完成发送ajax请求
    //组件挂载完成
    /*componentDidMount(){
        //请求的url地址
        const url =" https://api.github.com/search/repositories?q=r&sort=stars";
        //使用fetch发送ajax请求
        //第一个then方法转化json格式的数据   第二个then方法是成功的回调
        fetch(url).then(response=>response.json()).then(data=>{
            const {name,html_url} = data.items[0];

            this.setState({
                respoName:name,
                respoUrl:html_url
            });
        }).catch(error=>{
            alter('请求出错');
        });


    }*/



    async componentDidMount(){
        //请求的url地址
        const url =" https://api.github.com/search/repositories?q=v&sort=stars";
        //发送ajax请求  axios:基于promise
        try {
            //第一个then方法转化json格式的数据
            const result = await fetch(url).then(response=>response.json());
            console.log(result);
            const {name,html_url} = result.items[0];

            //设置状态
            this.setState({
                respoName:name,
                respoUrl:html_url
            });
        }catch (e) {
            alert('请求出错')
        }
    }

    render() {
        const {respoName,respoUrl} = this.state;
        if(!respoName){
            return (<h2>Loading...</h2>);
        }else {
            return (<h2>most star repo is <a href={respoUrl}>{respoName}</a></h2>)
        }
    }
}



/*
* 将异步回调的代码简化为串行的方式
* async  写到调用await的函数的前面
* await 写到promise的前面
*
* */
render(<Ajax/>,document.querySelector("#root"));
import React from 'react';
import axios from 'axios';

import './main.css';

export default class Main extends React.Component{
    constructor(props) {
        super(props);
    }



    state = {
        //页面初始化显示的状态值
        initView:true,
        //加载
        loading:false,
        //数据请求完成
        users:[],
        //失败
        errorMsg:''
    };

    //组件将要接收最新的属性  newProps就是最新属性:是一个对象数据类型的值
    //在组件接收属性的时候调用并且是在组件更新之前
    async componentWillReceiveProps(newProps){
        const {searchName} = newProps;
        const url = `https://api.github.com/search/users?q=${searchName}`;
        //设置状态
        this.setState({
            initView:false,
            loading:true
        });
       try {
           //发送ajax请求
           let result =  await axios.get(url);
           let arr = result.data.items;

           //设置状态
           this.setState({
               loading:false,
               users:arr
           });
       }catch (e) {
           //message:报错信息
            this.setState({
                errorMsg:'加载失败' + e.message
            });
       }
    }

    render(){
        const {initView,loading,users,errorMsg} = this.state;
        if (initView) {
            return (<h2>请输入内容点击搜索....{this.props.searchName}</h2>);
        }else if(loading){
            return (<h2>正在搜索中....</h2>)
        }else if(errorMsg){
            return (<h2>数据加载失败</h2>)
        }else {
            return (
                <div className="row">
                    {
                        users.map((item,index)=>{
                            const {id,url,avatar_url,login} = item;
                            return <div className="card" key={id}>
                                <a href={url} target="_blank">
                                    <img src={avatar_url} style={{width: "100px"}}/>
                                </a>
                                <p className="card-text">{login}</p>
                            </div>;
                        })
                    }
                </div>
            );
        }
    }

}
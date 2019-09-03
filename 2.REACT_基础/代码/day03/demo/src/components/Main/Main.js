import React from 'react';
import axios from 'axios';

import './main.css';

export default class Main extends React.Component{
    constructor(props) {
        super(props);
    }


    //组件将要接收最新的属性  newProps就是最新属性
    componentWillReceiveProps(newProps){
        //发送ajax请求

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

    render(){
        const {initView,loading,users,errorMsg} = this.state;
        if (initView) {
            return (<h2>请输入内容点击搜索....</h2>);
        }else if(loading){
            return (<h2>正在搜索中....</h2>)
        }else if(errorMsg){
            return (<h2>数据加载失败</h2>)
        }else {
            return (
                <div className="row">
                    <div className="card">
                        <a href="https://github.com/reactjs" target="_blank">
                            <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style={{width: "100px"}}/>
                        </a>
                        <p className="card-text">reactjs</p>
                    </div>
                    <div className="card">
                        <a href="https://github.com/reactjs" target="_blank">
                            <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style={{width: "100px"}}/>
                        </a>
                        <p className="card-text">reactjs</p>
                    </div>
                    <div className="card">
                        <a href="https://github.com/reactjs" target="_blank">
                            <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style={{width: "100px"}}/>
                        </a>
                        <p className="card-text">reactjs</p>
                    </div>
                    <div className="card">
                        <a href="https://github.com/reactjs" target="_blank">
                            <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style={{width: "100px"}}/>
                        </a>
                        <p className="card-text">reactjs</p>
                    </div>
                    <div className="card">
                        <a href="https://github.com/reactjs" target="_blank">
                            <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style={{width: "100px"}}/>
                        </a>
                        <p className="card-text">reactjs</p>
                    </div>
                </div>
            );
        }
    }

}
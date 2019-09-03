import React from 'react';
import Add from "./Add";
import List from "./List/List";

/*
* import css
* */
import "bootstrap/dist/css/bootstrap.css";

export default class App extends React.Component{

    //因为我们的ADD组件和List都要用到状态数据所以将初始化状态放到根组件上
    state = {
        commentArrays:[
            {name:"JACK", content:"我喜欢写代码..."},
            {name:"TOM", content:"我喜欢写代码..."},
            {name:"RC", content:"我喜欢写代码..."},
        ]
    };


    //增加数组当中的数据
    addCommentToArray = (comment)=>{
        //拿到状态数据
        let {commentArrays} = this.state;
        //添加到数组中
        commentArrays.unshift(comment);
        //设置状态
        this.setState({
            commentArrays
        });
    };

    //删除数组当中的数据
    deleteCommentToArray = (index)=>{
        console.log(1);
        //拿到状态数据
        let {commentArrays} = this.state;

        //删除数组中的内容
        commentArrays.splice(index,1);

        //设置状态
        this.setState({
            commentArrays
        });
    };

    render() {
        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className='container'>
                    <Add addCommentToArray = {this.addCommentToArray} />
                    {/*初始化状态后，将初始化的状态数据基于属性传递给LIST组件*/}
                    <List comments = {this.state.commentArrays} deleteArryItem={this.deleteCommentToArray}/>
                </div>
            </div>
        );
    }
}

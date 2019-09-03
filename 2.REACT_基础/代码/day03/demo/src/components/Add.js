import React from 'react';

export default class Add extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text" className="form-control" placeholder="用户名" ref='username'/>
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea className="form-control" rows="6" placeholder="评论内容" ref='usercontent'></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default pull-right" onClick={this.addComment}>提交</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

    addComment = ()=>{
        //收集数据
        const name = this.refs.username.value.trim();
        const content = this.refs.usercontent.value.trim();
        if (!name || !content){
            return alert('内容不能为空');
        }

        //包装成对象
        let comment = {
            name,
            content
        };

        //添加到数组中
        this.props.addCommentToArray(comment);

        //输入框清空
        this.refs.username.value = '';
        this.refs.usercontent.value = '';
    }

}
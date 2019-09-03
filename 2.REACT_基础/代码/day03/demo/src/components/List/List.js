import React from 'react';
import Item from "../Item/Item";

/*
* import css
* */

import './list.css';

export default class List extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {comments,deleteArryItem} = this.props;
        return (
            <div className="col-md-8">
                <h3 className="reply">评论回复：</h3>
                <h2 style={comments.length===0?{display:"block"}:{display:"none"}}>暂无评论，点击左侧添加评论！！！</h2>
                <ul className="list-group">
                    {
                        comments.map((comment,index)=>{
                            return  <Item index={index} deleteArryItem={deleteArryItem} comment={comment} key={index} />
                        })
                    }
                </ul>
            </div>
        );
    }

}
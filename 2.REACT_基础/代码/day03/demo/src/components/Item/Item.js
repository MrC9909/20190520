import React from 'react';

/*
* import css
* */
import './item.css'

export default class Item extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {name,content} = this.props.comment;
        return (
            <li className="list-group-item">
            <div className="handle">
            <a onClick={this.deleteComment}>删除</a>
    </div>
    <p className="user"><span>{name}</span><span>说:</span></p>
        <p className="centence">{content}</p>
        </li>
        );
    }

    //定义删除内容的方法
    deleteComment = (event)=>{
        event.preventDefault();
        this.props.deleteArryItem(this.props.index);
    }

}
import React from 'react';
import logo from './img/favicon.ico';
import 'bootstrap/dist/css/bootstrap.css';

export default class VoteBoady  extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="panel panel-default">
                VoteBoady
                <img src={logo}/>
            </div>
        );
    }

}
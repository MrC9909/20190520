import React from 'react';
import VoteHead from "./VoteHead";
import VoteBoady from "./VoteBoady";


export default class Vote extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                哈哈哈
                <VoteHead/>
                <VoteBoady/>
            </div>
        );
    }

}
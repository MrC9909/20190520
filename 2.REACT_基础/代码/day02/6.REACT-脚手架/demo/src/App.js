import React from 'react';
import Vote from "./components/Vote";

export default class App extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <Vote/>
            </div>
        );
    }

}
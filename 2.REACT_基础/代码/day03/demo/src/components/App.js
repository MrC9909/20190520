import React from 'react';
import Search from "./Search";
import Main from "./Main/Main";

//import  css
import "bootstrap/dist/css/bootstrap.css";

export default class App extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            searchName:''
        }
    }

    setSearchName = (searchName)=>{
        this.setState({
            searchName
        });
    };

    render(){
        return (
            <div className="container">
                <Search setSearchName={this.setSearchName} />
                <Main searchName={this.state.searchName} />
            </div>
        );
    }

}
import React from 'react';

export default class Search extends React.Component{
    constructor(props) {
        super(props);
    }

    searchName = ()=>{
        const searchName = this.refs.search.value.trim();
        this.props.setSearchName(searchName);
    };

    render(){
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text" ref='search' placeholder="enter the name you search"/>
                    <button onClick={this.searchName}>Search</button>
                </div>
            </section>
        );
    }

}
import React, { Component } from 'react'


class FindBooksInput extends Component {

    state= {
        value:'',
    }

    handleChange = event => {
        const val = event.target.value ;
        this.setState({value :val},()=>{
            this.props.onSearch(val);
        });
    };

    render() {

        return (
            <div className="search-books-input-wrapper">
                <input 
                type="text" 
                value = {this.state.value}
                placeholder="Find by title or author" 
                onChange={this.handleChange} autoFocus/>
            </div>
        );
    }
}

export default FindBooksInput;
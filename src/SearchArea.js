import React, { Component } from 'react'
import DismissSearchButton from './DismissSearchButton'
import FindBooksInput from './FindBooksInput'

class SearchArea extends Component {
    render() {
        const {onSearch,onResetSearch} = this.props;
        return (
            <div className="search-books-bar">
                <DismissSearchButton  onResetSearch = {onResetSearch}/>
                <FindBooksInput onSearch={onSearch} />
            </div>
        );
    }
}

export default SearchArea;
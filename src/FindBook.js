import React, { Component } from 'react'
import SearchBar from './SearchArea'
import SearchResults from './SearchResults.js'



class FindBook extends Component {
    render() {
        const {
            searchBooks,
            myBooks,
            onSearch,
            onResetSearch,
            onMove,
    } = this.props;
        return (
            <div className="search-books">
                <SearchBar onSearch={onSearch} onResetSearch={onResetSearch}/>
                <SearchResults 
                searchBooks={searchBooks}
                myBooks={myBooks}
                onMove={onMove}/>
            </div>
        );
    }
}
export default FindBook;
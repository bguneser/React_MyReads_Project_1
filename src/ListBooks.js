import React, { Component } from 'react'
import Library from './Library';
import GoToFindBookButton from './GoToFindBookButton';


class ListBooks extends React.Component {

   /*  static propTypes = {
        listBooks: PropTypes.array.isRequired
    } */

    render() {
        const { bookshelves, books, onMove } = this.props;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <Library
                 bookshelves={bookshelves} 
                 books={books} 
                 onMove={onMove} />
                <GoToFindBookButton />
            </div>
        );
    }
}

export default ListBooks
import React, { Component } from 'react'

import Bookshelf  from'./Bookshelf'

class Library extends Component {

    render() {
        const { bookshelves,books,onMove } = this.props
        return (
            <div className="list-books-content">
                <div>
                    {bookshelves.map(shelf => (
                        <Bookshelf
                         key={shelf.key} 
                         shelf={shelf} 
                         books={books} 
                         onMove={onMove}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default Library
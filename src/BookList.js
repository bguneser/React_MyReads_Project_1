import React , {Component} from 'react'
import GoToFindBookButton  from'./GoToFindBookButton'
import Library  from'./Library'

class BookList extends Component {

    render(){
        const {bookshelves} = this.props;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <Library bookshelves = {bookshelves}/>
                <GoToFindBookButton/>
            </div>
        )
    }

}

export default BookList
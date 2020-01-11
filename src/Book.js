import React , {Component} from 'react'
import BookshelfShifter from './BookshelfShifter'

class Book extends Component {

    render(){
      const {book,shelf,onMove} = this.props;
        return(
            <li>
            <div className="book">
              <div className="book-top">
                <div
                  className="book-cover"
                  style={{
                    width: 120,
                    height: 190,
                    backgroundImage:
                    `url(${book.imageLinks.thumbnail})`,
                  }}
                />
                <BookshelfShifter book={book} shelf={shelf} onMove={onMove}/>
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">
                {book.authors && book.authors.join(', ')}
                </div>
            </div>
          </li>
        );
    }

}

export default Book 
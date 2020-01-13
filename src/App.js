import React, { Component } from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import FindBook from './FindBook'
import { debounce } from 'throttle-debounce'



class BooksApp extends React.Component {
  bookshelves = [
    { key: 'currentlyReading', name: 'Currently Reading' },
    { key: 'wantToRead', name: 'Want to Read' },
    { key: 'read', name: 'Have Read' },
  ];

  state = {
    myBooks: [],
    searchBooks: [],
  }

  componentDidMount() {
    BooksAPI.getAll().then(allBooks => {
      this.setState({ myBooks: allBooks });
    });
  };

  searchForBooks = debounce(200, false, query => {
    if (query.length > 0) {
      BooksAPI.search(query).then(foundBooks => {
        if (foundBooks.error) {
          this.setState({ searchBooks: [] });
        } else {
          this.setState({ searchBooks: foundBooks});
        }
      });
    } else {
      this.setState({ searchBooks: [] });
    }
  });
  
  clearSearch = () => {
    this.setState({ searchBooks: [] });
  }

  changeBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);

    let updatedBooks = [];
    updatedBooks = this.state.myBooks.filter(b => b.id !== book.id);

    if (shelf !== 'none') {
      book.shelf = shelf;
      updatedBooks = updatedBooks.concat(book);
    }

    this.setState({
      myBooks: updatedBooks,
    });
  };

 


  render() {
    const { myBooks, searchBooks } = this.state;
   /*  const updatedBooks = this.state.books.map(b => {
      if (b.id === book.id) {
        b.shelf = shelf;
      }
      return b;
    }); */

   /*  this.setState({
      books: updatedBooks,
    }) */

    return (
      <div className="app">
        <Route exact
          path="/"
          render={() => (
            <ListBooks
              bookshelves={this.bookshelves}
              books={myBooks}
              onMove={this.changeBookShelf} />
          )} />
        <Route exact path="/search"
          render={() => <FindBook
            searchBooks={searchBooks}
            myBooks={myBooks}
            onSearch={this.searchForBooks}
            onMove={this.changeBookShelf}
            onResetSearch={this.clearSearch}
          />}
        />
      </div>
    )
  }
}
export default BooksApp

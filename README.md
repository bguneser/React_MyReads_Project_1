# MyReads Project

MyReads Project allows you to have collection of books in different shelf categories where you can select and categorize books you have read, are currently reading, or want to read by this it means When you select different shelf, the books moves there

There is also search functionality that allows you to find books by title or author and move them to your personal collection  

# More about this project

This is the final assessment project for Udacity's React Fundamentals course, developed by React Training. They provide me started code that contains all the CSS and HTML markup omits the React code that is required to complete project.Project has not been written from scratch so this saved my time

## Installing / Prerequisites

To get started developing right away:

* Fork or clone repository from `https://github.com/bguneser/React_MyReads_Project_1.git`
* After cloning this repository, to to directory `cd react_myReads_bguneser_project_1`
* install all project dependencies with `npm install`
* After you have installed all dependencies start the development server with `npm start`
* App should be running in `localhost:3000`


## What You're Getting

JS files have been created for each component  and use import/require statements to include them where they are needed.

First step is to determine each of logical areas on UI.

```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML and 2 Routers root url `/`  is for listing books (ListBook.js) and `/search` for FindBook.js to direct search page
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # It is used for DOM rendering only and includes BrowserRouter for Route functionality
    └── Book.js # Includes each book size, title and author and BookshelfShifter.js to categorize book
    ── BookList.js # There are two .js file in it (Library.js GoTOFindBookButton.js). Main objective is to list book on shelf and has navigation button for search page
    └── Bookshelf.js # There are two .js file in it (Library.js GoTOFindBookButton.js). Main objective is to list books on shelves and has navigation button to go to search page
    └── BookshelfShifter.js # Change the book shelf 
    └── DismissSearchButton.js # Direct to main page from search page 
    └── FindBook.js # This is search page that includes input area for title, author, list for searched books
    └── GoToFindBookButton.js # Direct to search page  with Link "/search"
    └── GoToFindBookButton.js # Direct to search page  with Link "/search"
    └── Library.js # Bookshelves frame UI
    └── SearchArea.js # There are 2 functionality one of is back to mainpage with DismissSearchButton.js and input area to find book by title and author
    └── SearchResults.js # According to input title or author it shows searched book list 

```

## Backend Server

To simplify  development process, udacity provided a backend server  to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods to fetch and change the data in server

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Developed by

Güneşer Birgün

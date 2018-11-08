import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import BookShelf from './BookShelf'

class BooksApp extends Component {
  
  constructor() {
    super();
    this.state = {
      books: [],
      searchBooks: []
    };
    this.changeShelf = this.changeShelf.bind(this);
    this.queryResults = this.queryResults.bind(this);
  }

  getBooks() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  componentDidMount() {
    this.getBooks();
  }

  changeShelf(book, shelf) {
    BooksAPI.update(book, shelf).then( () => {
      book.shelf = shelf;

      this.getBooks();
    })
  }

  queryResults(query) {
    if (query) {
      BooksAPI.search(query).then( (books) => {
        this.setState({searchBooks: books});
      })
    } else {
      this.setState({searchBooks: []});
    }
  }


  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BookShelf
            books={this.state.books}
            changeShelf={this.changeShelf}
          />
        )}/>
        <Route path='/Search' render={() => (
          <Search
            searchBooks={this.state.searchBooks}
            queryResults={this.queryResults}
            changeShelf={this.changeShelf}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp

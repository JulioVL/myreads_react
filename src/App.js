import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import BookShelf from './BookShelf'

class BooksApp extends Component {
  
  // constructor() {
  //   super();
  //   this.state = {
  //     books: []
  //   };

  // }

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BookShelf
            books={this.state.books}
          />
        )}/>
        <Route path='/Search' render={() => (
          <Search />
        )}/>
      </div>
    )
  }
}

export default BooksApp

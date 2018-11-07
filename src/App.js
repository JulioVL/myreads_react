import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import BookShelf from './BookShelf'

class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BookShelf />
        )}/>
        <Route path='/Search' render={() => (
          <Search />
        )}/>
      </div>
    )
  }
}

export default BooksApp

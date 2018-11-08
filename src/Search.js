import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class Search extends Component {

  queryResults(query) {
    this.props.queryResults(query);
  }

  render() {
    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to='/'>Close</Link>
            <div className="search-books-input-wrapper">

              <input type="text" placeholder="Search by title or author" 
                      onChange={(e) => this.queryResults(e.target.value)}/>

            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {this.props.searchBooks
                .map((book) => 
                  <li key={book.id}>
                   <Book 
                    book={book}
                    changeShelf={this.props.changeShelf}
                   />
                  </li>
                )
              }
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;

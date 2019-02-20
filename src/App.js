import React,  {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import Bookcase from './Bookcase'
import { Route } from 'react-router-dom'
import './App.css'

class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
     books: [],

    showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll().then((book) => {
      this.setState({books: book})
    })
  }

//atualiza a estante do livro
  changeBook = (book,shelf)=> {
    
    BooksAPI.update(book,shelf).then(()=>{
      BooksAPI.get(book.id).then(b =>{
        let array = [...this.state.books]
        let index = this.state.books.indexOf(book)
        array[index] = b
        this.setState({books: array})
    })
    
    })
    
          
  }

  render() {
          
    return (

      <div className="app">
        {this.state.showSearchPage ? (
          
                  <ListBooks 
                      books={this.state.books}
                      onChangeBook={this.changeBook}
                      onshowSearchPage={this.state.showSearchPage}
                    />
                
        ) : (
          
          <Bookcase
            books={this.state.books}
            onChangeBook={this.changeBook}
          />
        )}
      </div>
    )
  }
}

export default BooksApp

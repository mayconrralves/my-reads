import React,  {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import Bookcase from './Bookcase'
import { Route, Switch } from 'react-router-dom'
import NoMatch from './NoMatch'
import './App.css'

class BooksApp extends Component {
  state = {
     books: [],
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
        let oldBook = array.filter((value)=>{
          if(value.id === b.id)
            return value
          return null 
        })
        let index = array.indexOf(oldBook[0])
        if(index > -1) {
           array[index] = b
        }
        else {
          array.push(b)
        }
       
        this.setState({books: array})
    })
    
    })
    
          
  }

  render() {
          
    return (

      <div className="app">
      <Switch>
          <Route path="/search" render={({ history })=>(
              <ListBooks 
                  books={this.state.books}
                  onChangeBook={(book,shelf)=>{
                      this.changeBook(book,shelf)
                  }}
              />
          )}/>
                
          
          <Route exact path="/" render={()=>(
              <Bookcase
                  books={this.state.books}
                  onChangeBook={this.changeBook}
              />
          )}/>
          <Route component={NoMatch} />
        </Switch>
      </div>
    )
  }
}

export default BooksApp

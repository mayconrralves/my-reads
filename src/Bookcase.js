import React,  {Component} from 'react'
import PropTypes from 'prop-types'
import BookcaseConstruction from './BookcaseConstruction'


class Bookcase extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onChangeBook: PropTypes.func.isRequired
  }
  render() {
      const {books, onChangeBook} = this.props
      let currentlyReading = books.filter((book)=>book.shelf==='currentlyReading')
      let reads = books.filter((book)=>book.shelf==='read')
      let wantToRead = books.filter((book)=>book.shelf==='wantToRead')
      let bookcasesList = [
                  {"bookcase": currentlyReading, "name":"Currently Reading"},
                  {"bookcase": wantToRead,"name": "Want To Read"},
                  {"bookcase": reads,"name": "Reads"}  
                ]
      return (
            <div className="list-books">
                 <div className="list-books-title">
                        <h1>MyReads</h1>
                 </div>
                 <div className="list-books-content">
                    {
                        bookcasesList.map((book,i)=>(
                        <BookcaseConstruction key={i}
                          books={book["bookcase"]}
                          name={book["name"]}
                          onChangeBook={onChangeBook}
                        />
                     ))
                    }
                 </div>
                <div className="open-search">
                   <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
                </div>
            </div>
       
      )
  }
}

export default Bookcase
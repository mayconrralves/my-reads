import React,  {Component} from 'react'
import PropTypes from 'prop-types'

/*Componente para imprimir os livros*/
class BookPrint extends Component {
	static propTypes =  {
		showingBooks : PropTypes.array.isRequired,
		onChangeBook: PropTypes.func.isRequired

	}
	render (){
		const {showingBooks,  onChangeBook} = this.props

		return(
			<ol className="books-grid">
                      {showingBooks.map((book)=>(
                      <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                            <div className="book-shelf-changer">
                              <select value={book.shelf} onChange={(event)=>onChangeBook(book,event.target.value)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="none">None</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
                      </li>

            ))}
                   
                </ol>)
	}
}

export default BookPrint
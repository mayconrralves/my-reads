import React,  {Component} from 'react'
import PropTypes from 'prop-types'


class BookcaseConstruction extends Component {
	static propTypes =  {
		books : PropTypes.array.isRequired,
		name: PropTypes.string,
		onChangeBook: PropTypes.func.isRequired

	}
	render (){
		const {books, name, onChangeBook} = this.props
		let showingBooks = books
		return (
			<div className="bookshelf">
                  
                  <h2 className="bookshelf-title">{name}</h2>

                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {showingBooks.map((book)=>(
                      <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                            <div className="book-shelf-changer">
                              <select onChange={(event)=>onChangeBook(book,event.target.value)}>
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
                   
                </ol>
              </div>
            </div>
			)
	}
}

export default BookcaseConstruction
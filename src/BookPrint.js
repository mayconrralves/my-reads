import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

/*Componente para imprimir os livros*/
const BookPrint = ({showingBooks, onChangeBook}) => (
	
			<ol className="books-grid">
                      {showingBooks.map ((book)=>(
                      <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                        <div className="book-cover" 
                        	style={{ width: 128, 
                        			height: 193, 
                        			backgroundImage: `url(${Boolean(book.imageLinks) ? 
                        				book.imageLinks.thumbnail: 'icons/arrow-drop-down.svg'})`
                        		   }}></div>
                            <div className="book-shelf-changer">

                             <Book 
									book={book}
									onChangeBook={onChangeBook}
                             />
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
                        </div>
                      </li>

            ))}
                   
                </ol>


)

BookPrint.propTypes =  {
		showingBooks : PropTypes.array.isRequired,
		onChangeBook: PropTypes.func.isRequired,
	}
export default BookPrint
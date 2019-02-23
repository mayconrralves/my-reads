import React from 'react'
import PropTypes from 'prop-types'
import BookPrint from './BookPrint'

/*Componente para construir uma prateleira da estante*/
const BookcaseConstruction = ({books, name, onChangeBook})=>(
	
			<div className="bookshelf">
                  
                  <h2 className="bookshelf-title">{name}</h2>
                  <div className="bookshelf-books">
                      <BookPrint
                        showingBooks={books}
                        onChangeBook={onChangeBook}
                        books={books}
                      />
                    
              </div>
            </div>
)

BookcaseConstruction.propTypes =  {
    books : PropTypes.array.isRequired,
    name: PropTypes.string,
    onChangeBook: PropTypes.func.isRequired

  }
export default BookcaseConstruction
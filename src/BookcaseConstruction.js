import React,  {Component} from 'react'
import PropTypes from 'prop-types'
import BookPrint from './BookPrint'

/*Componente para construir uma prateleira da estante*/
class BookcaseConstruction extends Component {
	static propTypes =  {
		books : PropTypes.array.isRequired,
		name: PropTypes.string,
		onChangeBook: PropTypes.func.isRequired

	}
	render (){
		const {books, name, onChangeBook} = this.props
		return (
			<div className="bookshelf">
                  
                  <h2 className="bookshelf-title">{name}</h2>
                  <div className="bookshelf-books">
                      <BookPrint
                        showingBooks={books}
                        onChangeBook={onChangeBook}
                      />
                    
              </div>
            </div>
			)
	}
}

export default BookcaseConstruction
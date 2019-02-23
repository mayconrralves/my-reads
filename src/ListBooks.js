import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BookPrint from './BookPrint'
import * as BooksAPI from './BooksAPI'


class ListBooks extends Component {

	static propTypes = {
		books: PropTypes.array.isRequired,
		onChangeBook: PropTypes.func.isRequired,
	}

	state = {
		query: '',
		newBooks: [],
		err: true
	}

	updateQuery = (query)=>{
		this.setState({query: query})
	}

	clearQuery = (query) => {
		this.setState({query: ''})
	}

	searchBook = event => {
		const query =event.target.value
		this.updateQuery(query)
			if(query) {
				BooksAPI.search(query).then((books)=>{
		            	if(books.length){
		            		this.setState({ newBooks: books, err: false })
		            	}
		            	else {
		            		this.setState({ newBooks: [], err: true });
		            	}
 
		            	
		        })
			} else {
				this.setState({newBooks: [], err: false})
			}
		            
		       		
	}

	render(){
		const { books, onChangeBook} = this.props

		return (
			<div className="search-books">
	            <div className="search-books-bar">
		              <Link className="close-search" to="/">Close</Link>
		              <div className="search-books-input-wrapper">
		                   <input type="text" 
		                	   placeholder="Search by title or author"
		                	   value={this.state.query}
		                	   onChange={this.searchBook}
		               	    />
		                
	            </div>
            </div>
            <div className="search-books-results">
            {
            	this.state.newBooks.length > 0 && (
            		<div className='list-books'>
            		{
            			/*Adciona as marcacações nos livros visualizados que já estão em alguma estante*/
            			this.state.newBooks.forEach((newBook)=> {
            				books.forEach( (book)=> {
            					if(newBook.id === book.id){
            						newBook.shelf = book.shelf
            					}
            				})
            			})
            		}
            		
						<BookPrint
			               	showingBooks={this.state.newBooks}
			               	onChangeBook={onChangeBook}
			      
			             />
     
				 	</div>
            	)
            }
            {this.state.err && (
            <h3> No results</h3>
          )}
	             
            </div>
        </div>
				
			)
	}

}

export default ListBooks
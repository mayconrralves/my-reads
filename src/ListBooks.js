import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BookPrint from './BookPrint'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'


class ListBooks extends Component {

	static propTypes = {
		books: PropTypes.array.isRequired,
		onChangeBook: PropTypes.func.isRequired,
	}

	state = {
		query: ''
	}

	updateQuery = (query)=>{
		this.setState({query: query})
	}

	clearQuery = (query) => {
		this.setState({query: ''})
	}

	searchBook = (query, books)=> {
		            const match = new RegExp(escapeRegExp(query),'i')
		            return [
		            		...books.filter((book) => match.test(book.title)),
		            		...books.filter((book) => match.test(book.authors.join(" ")))
		            	   ]
		       		
	}

	render(){
		const { books, onChangeBook } = this.props
		const { query } = this.state
		let showingBooks = []
		query.split(" ").map((q)=>{
				if(q) {
					showingBooks.push(...this.searchBook(q,books))
					showingBooks = [...new Set(showingBooks)]
				}		
		})

		
		return (
			<div className="search-books">
	            <div className="search-books-bar">
		              <Link className="close-search" to="/">Close</Link>
		              <div className="search-books-input-wrapper">
		                   <input type="text" 
		                	   placeholder="Search by title or author"
		                	   value={query}
		                	   onChange={(event) => this.updateQuery(event.target.value)}
		               	    />
		                <div className='list-books'>
								 <BookPrint
		                        	showingBooks={showingBooks}
		                        	onChangeBook={onChangeBook}
		                      	/>
						</div>
	            </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
				
			)
	}

}

export default ListBooks
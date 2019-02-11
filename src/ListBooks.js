import React, {Component} from 'react'
import PropTypes from 'prop-types'


class ListBooks extends Component {

	static propTypes = {
		books: PropTypes.array.isRequired
	}

	state = {
		query: ''
	}

	clearQuery = (query) => {
		this.setState({query: ''})
	}

	render(){
		const {books} = this.props
		let showingBooks = books
		return (
					<ol className="books-grid">
						{showingBooks.map((book)=>(
						<li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                          {console.log(book.imageLinks.thumbnail)}
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                            <div className="book-shelf-changer">
                              <select>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
                      </li>

						))}
					</ol>
			)
	}

}

export default ListBooks
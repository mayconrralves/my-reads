import React from 'react'
import PropTypes from 'prop-types'

const Book =  ({book, onChangeBook})=> (

 <select defaultValue={book.shelf} onChange={(event)=>onChangeBook(book,event.target.value)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="none">None</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                
                              </select>


)

Book.propTypes = {
	book: PropTypes.object.isRequired,
	onChangeBook: PropTypes.func.isRequired
}

export default Book
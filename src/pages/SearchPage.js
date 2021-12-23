import React from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../utils/BooksAPI'
import Book from '../components/Book'
import PropTypes from 'prop-types';

class SearchPage extends React.Component {

	state = {
		query: '',
		results: []
	}
	handleChange = (ev) => {
		this.updateQuery(ev.target.value)
	}

	updateQuery = (query) => {
		this.setState({query})
		this.getResults(query)

	}

	getResults = (query) => {
	 	if(query.length > 0) {
	 		BooksAPI.search(query).then( (results) => (results.error ? this.setState(
	 			{ results: [] }) : this.setState({results})))
	 	}
	 	else {
	 		this.setState({ results: [] })
	 	}
	}
	


	render() {
		//console.log(this.state.query)
		//console.log(this.state.results)

  const filteredBooks = this.state.results.map(searchResult => {
    this.props.books.map(book => {
      if (searchResult.id === book.id) {
        searchResult.shelf = book.shelf
      }
      return book
    })
    return searchResult
  })

		return(
			<div className="search-books">
				<div className="search-books-bar">
	            <Link className="close-search" to='/'>Close</Link>
	            <div className="search-books-input-wrapper">
	                <input type="text" placeholder="Search by title or author" value={this.state.query}
	                	onChange={this.handleChange}/>
	            </div>
	        </div>
				
				 <div className="search-books-results"> <ol className="books-grid">
          		{filteredBooks.map( filteredBook => (<li key={filteredBook.id} >
   							<Book 
   							changeShelf={this.props.changeBookShelf}
   							currentShelf={filteredBook.shelf} 
   							title= {filteredBook.title} 
   							auther= {filteredBook.authors ? filteredBook.authors.join(', ') : 'N/A' }
   							book={filteredBook} 
		    	 			cover= {filteredBook.imageLinks ? filteredBook.imageLinks.thumbnail : '/image_not_available.png'}
		    	 		/></li>))}
		         </ol>
		      </div> 
		  </div>
		)
	}

}
export default SearchPage;

SearchPage.propTypes = {
  books: PropTypes.array,
  changeBookShelf: PropTypes.func
};








 
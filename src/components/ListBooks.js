import React from 'react'
import {Link} from 'react-router-dom'
import Book from './Book'
import PropTypes from 'prop-types';



class ListBooks extends React.Component {
	
	render() {

		return(
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
  	          		{this.props.books.filter(book => (book.shelf === 'currentlyReading')).map( book => (<li key={book.id} >
                  <Book
                    changeShelf={this.props.changeBookShelf}
                    currentShelf={book.shelf}    
                    title= {book.title} 
                    auther= {book.authors ? book.authors.join(', ') : 'N/A'} 
                    book={book} 
		    	 	        cover= {book.imageLinks?book.imageLinks.thumbnail: '/image_not_available.png'}/></li>))} 
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
           		    {this.props.books.filter(book => (book.shelf === 'wantToRead')).map( book => (<li key={book.id} >
                  <Book 
                    changeShelf={this.props.changeBookShelf} 
                    currentShelf={book.shelf}    
                    title= {book.title} 
                    auther= {book.authors ? book.authors.join(', ') : 'N/A'}
                    book={book} 
		    	 	        cover= {book.imageLinks?book.imageLinks.thumbnail: '/image_not_available.png'}/></li>))}  
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
          			   {this.props.books.filter(book => (book.shelf === 'read')).map( book => (<li key={book.id}>
                   <Book 
                    changeShelf={this.props.changeBookShelf}
                    currentShelf={book.shelf}     
                    title= {book.title} 
                    auther= {book.authors ? book.authors.join(', ') : 'N/A'} 
                    book={book} 
  		    	 	      cover= {book.imageLinks?book.imageLinks.thumbnail: '/image_not_available.png'}/></li>))}
                    </ol>
                  </div>
                </div>
              </div>

            <div className="open-search">
                <Link to='search'>Add a book</Link>
              </div>
          </div>
		)
	}

}
export default ListBooks;

ListBooks.propTypes = {
  books: PropTypes.array,
  changeBookShelf: PropTypes.func
};



         







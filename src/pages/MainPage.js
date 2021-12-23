import React from 'react'
import Header from '../components/Header'
import ListBooks from '../components/ListBooks'
import PropTypes from 'prop-types';



class MainPage extends React.Component {


	render() {

		return( 
	        <div className="list-books">
			    	<Header title='MyReads' />
			    	<ListBooks books={this.props.books} changeBookShelf={this.props.changeBookShelf}  />
	        </div>
		)
	}
}

export default MainPage;

MainPage.propTypes = {
  books: PropTypes.array,
  changeBookShelf: PropTypes.func
};

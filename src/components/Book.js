import React from 'react'
import PropTypes from 'prop-types';


class Book extends React.Component {


	handleChange = (ev) => {

		this.props.changeShelf(this.props.book,ev.target.value)
	} 

	render() {

		return(
	        <div className="book">
	          <div className="book-top">
	            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.cover})` }}></div>

	            <div className="book-shelf-changer">
	            
	              <select value={this.props.currentShelf} onChange={this.handleChange} >

	                <option value="move" disabled>Move to...</option>
	                <option value="currentlyReading">Currently Reading</option>
	                <option value="wantToRead">Want to Read</option>
	                <option value="read">Read</option>
	                <option value="none">None</option>
	              </select>
	            </div>

	          </div>
	          <div className="book-title">{this.props.title}</div>
	          <div className="book-authors">{this.props.auther}</div>
	      </div>

		)
	}
}

export default Book;

Book.propTypes = {
  title: PropTypes.string,
  auther: PropTypes.string,
  cover: PropTypes.string,
  currentShelf:  PropTypes.string,
  changeShelf: PropTypes.func
};

Book.defaultProps = {
  title: 'N/A',
  auther: 'N/A',
  cover: process.env.PUBLIC_URL + '/image_not_available.png',
  currentShelf: 'none'
};



	                     

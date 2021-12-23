import React from 'react'
import PropTypes from 'prop-types';


function Header(props) {
	return(
		<div className="list-books-title">
	        <h1>{props.title}</h1>
	    </div>
	)
}

export default Header;

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
	title: ''
};


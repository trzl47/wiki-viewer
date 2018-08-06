// Libs
import React from 'react';
// style
// import '../css/home.css';

const Article = (props) => {
	return (
		<React.Fragment>
		{
			(Object.keys(props.data).length === 0 && props.data.constructor === Object) ?
			'Search for an article or click the Random Article button'
			:
			'message' in props.data ?
			props.data.message
			:
			'Article'
		}
		</React.Fragment>
	);
};

export default Article;
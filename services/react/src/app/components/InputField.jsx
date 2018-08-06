// Libs
import React from 'react';
import { ModeContext } from '../context/context.js';
// style
// import '../css/home.css';

const InputField =(props) => {
	return (
		<ModeContext>
		{
			({searchField, updateSearch}) => {
				return (
					<input
					type="text"
					onFocus={(e) => e.target.select()}
					value={searchField === null ? props.searchMode : searchField}
					onChange={(e) => updateSearch(e) } />
				);
			}
		}
		</ModeContext>
	);
};

export default InputField;
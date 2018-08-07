// Libs
import React from 'react';
import axios from 'axios';

export const ModeContext = React.createContext();

export class ModeProvider extends React.Component {
	constructor(props) {
		super(props);

		const DEVMODE = process.env.NODE_ENV == 'development' ? true : false;
		const HOST = DEVMODE ? 'localhost' : process.env.VHOST;
		const PRTCL = DEVMODE ? 'http' : 'https';

		this.updateSearch = (e) => {
			e.persist();
			this.setState({ searchField: e.target.value });
		};

		this.randomSubmit = (e) => {
			e.preventDefault();
			window.open('https://en.wikipedia.org/wiki/Special:Random');
		};

		this.handleSubmit = (e) => {
			e.preventDefault();
			const api = `https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=${this.state.searchField}&origin=*`;

			this.setState({ loading: true });

			axios.post(api)
			.then((response) => {
				this.setState({
					data: response.data.query.pages,
				});
			})
			.catch(error => {
				this.setState({
					data: { message: 'Error fetching data', error: error },
				});
			})
			.then(() => {
				this.setState({
					loading: false
				});
			});
		};

		this.state = {
			searchField: '',
			loading: false,
			data: {}
		};
	}

	render()  {
		return (
			<ModeContext.Provider
			value={{
				...this.state,
				updateSearch: this.updateSearch,
				handleSubmit: this.handleSubmit,
				randomSubmit: this.randomSubmit,
			}}>
				{ this.props.children }
			</ModeContext.Provider>
		);
	}
}
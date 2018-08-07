// Libs
import React from 'react';
// components
import InputField from './components/InputField.jsx';
import Articles from './components/Articles.jsx';
// style
import '../css/home.css';
// context
import { ModeProvider, ModeContext } from './context/context';

class Home extends React.Component {
	render() {
		return (
			<section className='homepage'>
				<ModeProvider>
					<header>
						<h1 className='header'>Wikipedia Viewer!</h1>
					</header>
					<section className='sec-input'>
						<InputField />
						<ModeContext.Consumer>
						{
							({loading, handleSubmit}) => {
								return (
									<label>
										<input
										disabled={loading}
										type="submit"
										onClick={(e) => handleSubmit(e)}
										onSubmit={(e) => handleSubmit(e)}
										value={loading ? 'Loading...' : 'Find article'} />
									</label>
								);
							}
						}
						</ModeContext.Consumer>
					</section>
					{/* <p className='input-helper'>Search for a topic</p> */}
					<section className='results'>
						<ModeContext.Consumer>
						{
							({loading, data}) => {
								return (
									<React.Fragment>
									{
										loading ?
										'Searching for article...'
										:
										<Articles data={data} />
									}
									</React.Fragment>
								);
							}
						}
						</ModeContext.Consumer>
					</section>
				</ModeProvider>
			</section>
		);
	}
}

export default Home;
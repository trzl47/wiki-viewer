// Libs
import React from 'react';
// components
import InputField from './components/InputField';
import Article from './components/Article';
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
					<ModeContext.Consumer>
					{
						({loading, randomSubmit}) => {
							return (
								<label>
									<button
									disabled={loading}
									type="submit"
									onClick={(e) => randomSubmit(e)}
									onSubmit={(e) => randomSubmit(e)}>
										{loading ? 'Loading...' : 'Learn something new'}
									</button>
								</label>
							);
						}
					}
					</ModeContext.Consumer>
					<section className='sec-input'>
						<InputField />
						<p className='input-helper'>Search for a topic</p>
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
										<Article data={data} />
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
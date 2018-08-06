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
					<section className='sec-input'>
							<fieldset className='inputoptions'>
								<ModeContext.Consumer>
								{
									({searchMode}) => {
										return (
											<InputField searchMode={searchMode} />
										);
									}
								}
								</ModeContext.Consumer>
								<p className='inputhelper'>Search for a topic</p>
							</fieldset>
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
					<section className='sec-displayarea'>
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
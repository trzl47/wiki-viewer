// Libs
import React from 'react';
// style
import '../../css/articles.css';
// context
import { ModeContext } from '../context/context';

const Articles = (props) => {
	const pages = Object.keys(props.data).map((key) => { return props.data[key]; }).map((page) => {
		return (
			<article className='article' key={page.pageid}>
				<a className='article-link' href={`https://en.wikipedia.org/?curid=${page.pageid}`}>
					<figure className='page-img'>
						<img
						src={page.thumbnail === undefined ? '[no image]' : page.thumbnail.source}
						alt={page.thumbnail === undefined ? '[no image]' : page.pageimage} />
					</figure>
					<main className='extract'>
						<h4 className='title'> { page.title } </h4>
						<p className='desc'> { page.extract } </p>
					</main>
				</a>
			</article>
		);
	});
	return (
		<section className='articles'>
		{
			(Object.keys(props.data).length === 0 && props.data.constructor === Object) ?
				<ModeContext.Consumer>
				{
					({loading, randomSubmit}) => {
						return (
							<label>
								Search for an article or
							<input
							disabled={loading}
							type="submit"
							onClick={(e) => randomSubmit(e)}
							onSubmit={(e) => randomSubmit(e)}
							value={loading ? 'Loading...' : 'Learn something new'} />
							</label>
						);
					}
				}
				</ModeContext.Consumer>
			:
			'message' in props.data ?
				props.data.message
				:
				pages
		}
		</section>
	);
};

export default Articles;
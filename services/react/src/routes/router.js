// Components
import NotFound from '../app/NotFound.jsx';
import Home from '../app/Home.jsx';

export default {
	routes: [
		{
			path: '/',
			component: Home,
			exact: true
		},
		{
		path: '*',
		component: NotFound,
		exact: false
		}
	],
	redirects: [
		{
			// from: '/people',
			// to: '/user',
			// status: 301
		}
	]
};
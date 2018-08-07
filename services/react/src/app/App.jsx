// libs
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RedirectWithStatus from './redirect-w-status.jsx';
// components
import ScrollToTop from './ScrollToTop.jsx';
// routes
import router from '../routes/router';
// styles
import '../css/reset.css';
import '../css/index.css';

class App extends React.Component {
	render() {
		let routes = router.routes.map(({ path, component, exact }, i) =>
			<Route key={Math.random() + 'ROUTE_'} exact={exact} path={path} component={component} />
		);
		let redirects = router.redirects.map(({ from, to, status }, i) =>
			<RedirectWithStatus key={Math.random() + 'REDIRECT_'} from={from} to={to} status={status} />
		);

		return (
			<BrowserRouter>
				<ScrollToTop>
					<Switch>
						{routes}
						{redirects}
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
	);
	}
}
export default App;
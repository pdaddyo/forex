import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import {useRouterHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import makeRoutes from './routes';
import Root from './containers/Root';
import configureStore from './redux/configureStore';

// IE polyfills and fixes
import es6promise from 'es6-promise';
es6promise.polyfill();
import 'isomorphic-fetch';
import 'event-source-polyfill';
import 'babel-polyfill';

// Create redux store and sync with react-router-redux. We have installed the
// react-router-redux reducer under the key "router" in src/routes/index.js,
// so we need to provide a custom `selectLocationState` to inform
// react-router-redux of its location.
const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);

// Configure history for react-router
const browserHistory = useRouterHistory(createBrowserHistory)({
	basename: __BASENAME__
});

const history = syncHistoryWithStore(browserHistory, store, {
	selectLocationState: (state) => state.router
});

// Now that we have the Redux store, we can create our routes. We provide
// the store to the route definitions so that routes have access to it for
// hooks such as `onEnter`.
const routes = makeRoutes(store);

// tell google analytics when we navigate
history.listen(location => {
	const {ga} = window;
	if (!ga) {
		//	console.log('Couldn\'t find google analytics object to notify of navigate');
		return;
	}
	ga('send', 'pageview', location.pathname);
});

// Now that redux and react-router have been configured, we can render the
// React application to the DOM!
ReactDOM.render(
	<Root history={history} routes={routes} store={store}/>,
	document.getElementById('root')
);

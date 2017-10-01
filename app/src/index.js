import React from 'react';
import {render} from 'react-dom';
import {Router} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import '../index.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';
import { hashHistory  } from 'react-router';
import App from './containers/App';
import Home from './containers/home';
import Login from './containers/Login';
import configureStore from './store/configureStore';
import allReducers from './reducers'
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

injectTapEventPlugin();
const logger = createLogger();
const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise,logger)
);

export function hasAccessToken(){
	let accessToken = localStorage.getItem('access_token');
	return accessToken;
}

function routeHomePages(s, cb) {
	System.import('./containers/home').then(component => {
		cb(null, component.default || component);
	});
}

function routeQuestionsVerbose(s, cb) {
	System.import('./containers/questionsVerbose').then(component => {
		cb(null, component.default || component);
	});
}

function routeQuestionsLazy(s, cb) {
	System.import('./containers/questionsLazy').then(component => {
		cb(null, component.default || component);
	});
}

function routeLogin(s, cb) {
	System.import('./containers/Login').then(component => {
		cb(null, component.default || component);
	});
}

function routeSignUp(s, cb) {
	System.import('./containers/signup').then(component => {
		cb(null, component.default || component);
	});
}

function routeSelectLetter(s, cb) {
	System.import('./containers/selectLetter').then(component => {
		cb(null, component.default || component);
	});
}

function routeReceiver(s, cb) {
	System.import('./containers/receiver').then(component => {
		cb(null, component.default || component);
	});
}

function routeLetterDetails(s, cb) {
	System.import('./containers/letterDetails').then(component => {
		cb(null, component.default || component);
	});
}

//const history = useRouterHistory(createHashHistory)();
render(
	(<Provider store={store}>
			<Router history={hashHistory}>
				<Route path="/" component={App}>
				  <IndexRoute component={Login}/>
					<Route path="home" getComponent={routeHomePages}/>
					<Route path="questions-verbose/:id" getComponent={routeQuestionsVerbose}/>
          <Route path="questions-lazy/:id" getComponent={routeQuestionsLazy}/>
          <Route path="login" getComponent={routeLogin}/>
          <Route path="signup" getComponent={routeSignUp}/>
          <Route path="receiver/:id" getComponent={routeReceiver}/>
          <Route path="select-letter/:id" getComponent={routeSelectLetter}/>
          <Route path="letter-details/:id" getComponent={routeLetterDetails}/>
	      </Route>
			</Router>
		</Provider>), document.getElementById('app')
);

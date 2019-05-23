import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider as ReduxProvider} from 'react-redux';
import reducer from './redux/reducers';
import middleware from './middelware'
import logger from './middelware/logger'
import thunk from 'redux-thunk'

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    shouldHotReload: false,
    name: `react-redux-course - ${window.location.hostname}`
})
: compose;

const enhancers = [applyMiddleware(logger, thunk)];

const store = createStore(
    reducer
    ,composeEnhancers(...enhancers)
    );

console.log(store.getState())

ReactDOM.render(
    <ReduxProvider store={store}>
        <App />
    </ReduxProvider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore } from 'redux';
import {Provider as ReduxProvider} from 'react-redux';
import reducer from './redux/reducers';
import middleware from './middelware'

const store = createStore(
    reducer
    ,middleware
    );

console.log(store.getState())

ReactDOM.render(
    <ReduxProvider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ReduxProvider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Routes from './components/routes.jsx';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import horchataApp from './reducers/reducers';
import styles from '../css/style.styl';

const loggerMiddleware = createLogger();
let store =  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
)(createStore)(horchataApp);

export default class App extends React.Component {
    render() {
        return (
            <Provider className={styles} store={store}>
                <Routes />
            </Provider>
        );
    }
}

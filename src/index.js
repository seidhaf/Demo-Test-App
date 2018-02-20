import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routeReducers } from 'react-router-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store, { history } from './store';

ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers } from 'redux';
import {Provider} from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import { routeReducers } from 'react-router-redux';
import { Values } from "redux-form-website-template";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store, { history } from './store';

ReactDOM.render(
<Provider store={store}>
  <div style={{ padding: 15 }}>
    <App />
    <div class ="container">
    <Values form="content" />
    </div>
  </div>
</Provider>, document.getElementById('root')
);
registerServiceWorker();

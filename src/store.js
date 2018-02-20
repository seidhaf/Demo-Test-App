import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from './reducers/index';

const defaultState = {};
const store = createStore(rootReducer, defaultState);

export default store;

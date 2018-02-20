import { combineReducers } from 'redux';
import { routeReducers } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

const rootReducers = combineReducers ({
  routing: routeReducers,
  form: formReducer
});

export default rootReducers;

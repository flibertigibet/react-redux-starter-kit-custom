// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import counterReducer from './counterReducer';
 import {routerReducer} from 'react-router-redux';

 const rootReducer = combineReducers({
  counter: counterReducer,
  routing: routerReducer
});

export default rootReducer;

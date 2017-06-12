import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import quotes from './quotes';

export default combineReducers({
  quotes: quotes,
  routing: routerReducer
});
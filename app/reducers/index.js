import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import * as fromQuotes from './quotes';
import { createSelector } from 'reselect'

/**
 * root reduces
 */
export default combineReducers({
  quotes: fromQuotes.reducer,
  routing: routerReducer
});


/**
 * selectors
 */
export const getQuotes = state => state.quotes;
export const getQuotesArray = createSelector(getQuotes, fromQuotes.getQuotesArray);
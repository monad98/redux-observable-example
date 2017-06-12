/**
 * Created by Hyungwu Pae on 6/12/17.
 */
import * as fromQuotes from '../actions/quotes';
import { createSelector } from 'reselect'

const initialState = {
  ids: [],
  entities: {},
};

/**
 * Reduces
 */
export default function quotes(state = initialState, action) {
  switch (action.type) {
    case fromQuotes.LOAD_QUOTES: {
      const quotes = action.payload;
      const ids = quotes.map(q => q._id);
      const entities = quotes.reduce((acc, q) => Object.assign(acc, {[q._id]: q}), {});
      return {ids, entities};
    }

    case fromQuotes.LOAD_QUOTE: {
      const quote = action.payload;
      const entities = Object.assign({}, state.entities, {[quote._id]: quote});
      const ids = Object.keys(entities);
      return {ids, entities};
    }

    case fromQuotes.DELETE_SUCCESS: {
      const deletedId = action.payload;
      const ids = state.ids.filter(id => id !== deletedId);
      const entities = ids.reduce((acc, id) => Object.assign(acc, {[id]: state.entities[id]}), {});
      return {ids, entities};
    }
    default:
      return state;
  }
}

/**
 * Selectors
 */
const getIds = state => state.ids;
const getEntities = state => state.entities;
export const getQuotesArray = createSelector([getIds, getEntities], (ids, entities) => {
  console.log(ids)
  console.log(entities)
  return ids.map(id => entities[id])
});

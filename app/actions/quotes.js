/**
 * Created by Hyungwu Pae on 6/12/17.
 */

/**
 * Action types
 */
export const FETCH_QUOTES = 'FETCH_QUOTES';
export const LOAD_QUOTES = 'LOAD_QUOTES';
export const SAVE_QUOTE = 'SAVE_QUOTE';
export const LOAD_QUOTE = 'LOAD_QUOTE';
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const DELETE_QUOTE = 'DELETE_QUOTE';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';


/**
 * Actions
 */
export function fetchQuotes () {
  return {
    type: FETCH_QUOTES,
    payload: null
  }
}

export function loadQuotes (quotes) {
  return {
    type: LOAD_QUOTES,
    payload: quotes
  }
}

export function saveQuote (quote) {
  return {
    type: SAVE_QUOTE,
    payload: quote
  };
}

export function loadQuote (quote) {
  return {
    type: LOAD_QUOTE,
    payload: quote
  };
}

export function toggleFavorite (quote) {
  return {
    type: TOGGLE_FAVORITE,
    payload: quote
  };
}

export function deleteQuote (id) {
  return {
    type: DELETE_QUOTE,
    payload: id
  };
}

export function deleteSuccess (id) {
  return {
    type: DELETE_SUCCESS,
    payload: id
  };
}
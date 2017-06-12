import { ajax } from 'rxjs/observable/dom/ajax';
import * as fromQuotes from '../actions/quotes';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';

export const fetchQuotes = (action$) =>
  action$.ofType(fromQuotes.FETCH_QUOTES)
    .switchMap(() =>
      ajax.get(`/api/quotes`)
        .map(ajaxRes => ajaxRes.response)
        .map(fromQuotes.loadQuotes)
        .catch(e => console.log(e))
    );

export const saveQuote = (action$) =>
  action$.ofType(fromQuotes.SAVE_QUOTE)
    .map(action => action.payload)
    .switchMap(quote =>
      ajax.post(`/api/quotes`, quote)
        .map(ajaxRes => ajaxRes.response)
        .map(fromQuotes.loadQuote)
    );


export const toggleFavorite = (action$) =>
  action$.ofType(fromQuotes.TOGGLE_FAVORITE)
    .map(action => action.payload)
    .switchMap(({_id, text, favorited}) =>
      ajax.patch(`/api/quotes/${_id}`, {_id, text, favorited: !favorited})
        .map(ajaxRes => ajaxRes.response)
        .map(() => fromQuotes.loadQuote({_id, text, favorited: !favorited}))
    );

export const deleteQuote = (action$) =>
  action$.ofType(fromQuotes.DELETE_QUOTE)
    .map(action => action.payload)
    .switchMap(quote =>
      ajax.delete(`/api/quotes/${quote._id}`)
        .map(ajaxRes => ajaxRes.response)
        .map(() => fromQuotes.deleteSuccess(quote._id))
    );


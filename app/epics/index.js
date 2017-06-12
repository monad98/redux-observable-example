import { combineEpics } from 'redux-observable';
import {fetchQuotes, saveQuote, toggleFavorite, deleteQuote} from "./quotes";
// import * as quotes from "./quotes";


export default combineEpics(
  fetchQuotes,
  saveQuote,
  toggleFavorite,
  deleteQuote
);
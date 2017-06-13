import { connect } from 'react-redux';
import {deleteQuote, toggleFavorite} from '../actions/quotes';
import {getQuotesArray} from '../reducers/index';
import QuoteListComponent from '../components/QuoteList';

export default connect(
  (state) => ({quotes: getQuotesArray(state)}),
  { deleteQuote, toggleFavorite }
)(QuoteListComponent);


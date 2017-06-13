import {saveQuote} from '../actions/quotes';
import { connect } from 'react-redux';
import SubmitQuoteComponent from '../components/SubmitQuote';

export default connect(
  null,
  { saveQuote }
)(SubmitQuoteComponent);
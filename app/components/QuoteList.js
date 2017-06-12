import React from 'react';
// import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {deleteQuote, toggleFavorite} from '../actions/quotes';
import {getQuotesArray} from "../reducers/quotes";
import QuoteCellComponent from './QuoteCell';

const QuoteListComponent = ({deleteQuote, toggleFavorite, quotes}) => (
  <div className="panel panel-primary">
    <div className="panel-heading">
      <h3 className="panel-title"><i className="fa fa-list"></i> Quote List </h3>
    </div>
    <div className="panel-body">
      {quotes.map((quote, idx) =>
        (
          <div key={idx} className="row">
            <div className="col-sm-12 col-lg-12 col-md-12">
              <QuoteCellComponent quote={quote} deleteQuote={deleteQuote.bind(null, quote)} toggleFavorite={toggleFavorite.bind(null, quote)} />
            </div>
          </div>
        )
      )}
    </div>
  </div>


);
// QuoteListComponent.propTypes = {
//
// };

// //
export default connect(
  (state) => {
    console.info(getQuotesArray(state.quotes))
    return ({quotes: getQuotesArray(state.quotes)})
  },
  { deleteQuote, toggleFavorite }
)(QuoteListComponent);


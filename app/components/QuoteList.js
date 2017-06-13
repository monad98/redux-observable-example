import React from 'react';
import PropTypes from 'prop-types'
import QuoteCellComponent from './QuoteCell';

const QuoteListComponent = ({deleteQuote, toggleFavorite, quotes}) => (
  <div>
    <div className='page-header'>
      <h2>Quote List</h2>
    </div>
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
  </div>
);

QuoteListComponent.propTypes = {
  deleteQuote: PropTypes.func.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  quotes: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      favorited: PropTypes.bool.isRequired
    }).isRequired
  )
};

export default QuoteListComponent;
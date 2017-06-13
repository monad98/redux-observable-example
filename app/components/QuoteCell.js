import React from 'react';
import PropTypes from 'prop-types';

const QuoteCellComponent = ({deleteQuote, toggleFavorite, quote}) => (
  <div>
    <div className="col-sm-1 col-md-1 col-xs-1 col-lg-1">
      <h4><i onClick={toggleFavorite} className={quote.favorited ? 'fa fa-star' : 'fa fa-star-o'} style={{color: '#F6BB42'}}></i></h4>
    </div>

    <div className="col-sm-9 col-md-9 col-xs-9 col-lg-9">
      <h4 className="title">
        {quote.text}
      </h4>
    </div>
    <div className="col-sm-2 col-md-2 col-xs-2 col-lg-2">
      <button onClick={deleteQuote} className="btn btn-danger">Delete</button>
    </div>

  </div>
);

QuoteCellComponent.propTypes = {
  deleteQuote: PropTypes.func.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  quote: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    favorited: PropTypes.bool.isRequired
  }).isRequired
};


export default QuoteCellComponent;
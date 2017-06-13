import React from "react";
import PropTypes from 'prop-types'
import { Route } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import QuoteListContainer from '../containers/QuoteList';
import SubmitQuoteContainer from '../containers/SubmitQuote';
import {fetchQuotes} from '../actions/quotes';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class Main extends React.Component{

  constructor(props) {
    super(props);
    props.fetchQuotes();
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container main">
          <br/>
          <div className="text-center">
            <Link className="btn btn-lg btn-primary" to='/submit'>SUBMIT</Link>
            <Link className="btn btn-lg btn-primary" to='/quotes'>QUOTES</Link>
          </div>
          <br/>

          <Route path="/submit" component={SubmitQuoteContainer} />
          <Route path="/quotes" component={QuoteListContainer} />
        </div>
        <Footer />
      </div>
    );
  }
}
Main.propTypes = {
  fetchQuotes: PropTypes.func.isRequired
};

export default connect(
  null,
  {fetchQuotes}
)(Main);
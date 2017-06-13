import React from "react";
import PropTypes from 'prop-types'
import { Route } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import QuoteListContainer from '../containers/QuoteList';
import SubmitQuoteContainer from '../containers/SubmitQuote';
import {fetchQuotes} from '../actions/quotes';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'

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
            <NavLink className="btn btn-lg btn-default" to='/submit' activeClassName='btn-primary'>SUBMIT</NavLink>
            <NavLink className="btn btn-lg btn-default" to='/quotes' activeClassName='btn-primary'>QUOTES</NavLink>
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
  fetchQuotes: PropTypes.func.isRequired,
  location: PropTypes.any
};

export default connect(
  ({routing}) => ({location: routing.location}), // NavLink update
  {fetchQuotes}
)(Main);
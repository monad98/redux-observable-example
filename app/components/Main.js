import React from "react";
// import PropTypes from 'prop-types'
import { Route } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import QuoteList from '../components/QuoteList';
import SubmitQuote from '../components/SubmitQuote';
import {fetchQuotes} from '../actions/quotes';
import { connect } from 'react-redux';

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
          <Route path="/submit" component={SubmitQuote} />
          <Route path="/quotes" component={QuoteList} />
        </div>
        <Footer />
      </div>
    );
  }
}
// Main.propTypes = {
//
// };

export default connect(
  null,
  {fetchQuotes}
)(Main);
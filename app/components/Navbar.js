import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Navbar = ({count}) => (
<nav className="navbar navbar-default navbar-fixed-top">
  <div className="container">
    <div className="navbar-header">
      <Link className="navbar-brand" to="/"><i className="fa fa-quote-left"></i> React Quotes App</Link>
    </div>
    <div id="navbar" className="collapse navbar-collapse">
      <ul className="nav navbar-nav">
        <li><NavLink to="/submit" activeClassName='active'>Submit</NavLink></li>
        <li><NavLink to="/quotes" activeClassName='active'>Quotes <span className="label label-primary">{count}</span></NavLink></li>
      </ul>
    </div>
  </div>
</nav>
);

Navbar.propTypes = {
  count: PropTypes.number.isRequired
};

//
export default connect(
  ({ quotes }) => ({ count: quotes.ids.length })
)(Navbar);
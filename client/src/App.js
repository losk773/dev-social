import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Navbar } from "./components/layout/Navbar";
import { Landing } from "./components/layout/Landing";
import { Login } from './components/auth/Login';

import { RegisterContainer, LoginContainer } from './containers';
import { AlertContainer } from './containers';
import { getUser } from './thunks';

import './App.css';
import { setAuthToken } from './utils';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = ({getUser}) => {
  useEffect(() => {
    getUser();
  }, []);

  return (
    <Router>
      <Fragment>
        <Navbar/>
        <Route exact path="/" component={Landing}/>
        <section className="container">
          <AlertContainer/>
          <Switch>
            <Route exact path="/register" component={RegisterContainer}/>
            <Route exact path="/login" component={LoginContainer}/>
          </Switch>
        </section>
      </Fragment>
    </Router>
  )
};

App.propTypes = {
  getUser: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => {
  return {
    getUser: () => dispatch(getUser()),
  }
};


export default connect(null, mapDispatchToProps)(App);

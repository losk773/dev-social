import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { 
  RegisterContainer, 
  LoginContainer, 
  NavbarContainer,
  AlertContainer,
  DashboardContainer,
  LandingContainer,
  CreateProfileContainer,
  EditProfileContainer,
  AddExperienceContainer,
  AddEducationContainer,
  ProfilesContainer,
  ProfileContainer,
  PostsContainer,
  SinglePostContainer,
} from './containers';
import PrivateRoute from './routes/PrivateRoute';
import { getUser } from './thunks';

import './App.css';
import { setAuthToken } from './utils';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = ({getUser}) => {
  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <Router>
      <Fragment>
        <NavbarContainer/>
        <Route exact path="/" component={LandingContainer}/>
        <section className="container">
          <AlertContainer/>
          <Switch>
            <Route exact path="/register" component={RegisterContainer}/>
            <Route exact path="/login" component={LoginContainer}/>
            <Route exact path="/profiles" component={ProfilesContainer}/>
            <Route exact path="/profile/:id" component={ProfileContainer}/>
            <PrivateRoute exact path="/dashboard" component={DashboardContainer}/>
            <PrivateRoute exact path="/create-profile" component={CreateProfileContainer}/>
            <PrivateRoute exact path="/edit-profile" component={EditProfileContainer}/>
            <PrivateRoute exact path="/add-experience" component={AddExperienceContainer}/>
            <PrivateRoute exact path="/add-education" component={AddEducationContainer}/>
            <PrivateRoute exact path="/posts" component={PostsContainer}/>
            <PrivateRoute exact path="/posts/:id" component={SinglePostContainer}/>
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

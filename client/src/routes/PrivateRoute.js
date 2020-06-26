import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateRoute = ({component: Component, user: { isAuth, loading }, ...rest}) => (
  <Route {...rest} render={props => !isAuth && !loading ? (
    <Redirect to="/login"/>
  ) : (
    <Component {...props}/>)
  }/>
)
PrivateRoute.propTypes = {
  component: PropTypes.element.isRequired,
  user: PropTypes.object.isRequired,
}

const mapStateToProps = ({user}) => ({
  user,
})

export default connect(mapStateToProps)(PrivateRoute);
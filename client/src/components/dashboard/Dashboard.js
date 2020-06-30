import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Spinner } from '../layout/Spinner';
import { Link } from 'react-router-dom';

export const Dashboard = ({getProfile, user: { user }, profile: { loading, profile }}) => {
  useEffect(() => {
    if (!profile) {
      getProfile();
    }
  }, []);

  return loading && profile === null ? <Spinner/> : (
    <React.Fragment>
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user"></i>{' '}
        Welcome {user && user.name}
      </p>
      {profile !== null ? (
        <React.Fragment>
          has
        </React.Fragment>
      ) : (
        <React.Fragment>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to='/create-profile' className="btn btn-primary my-1">
            Create Profile
          </Link>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

Dashboard.propTypes = {
  getProfile: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Spinner } from '../../components/layout/Spinner';
import { ProfileItem } from './ProfileItem';

export const Profiles = ({profile: { profiles, loading }, getProfiles}) => {
  useEffect(() => {
    if (!profiles.length) {
      getProfiles();
    }
  }, []);

  return loading ? <Spinner/> : (
    <React.Fragment>
      <h1 className="large text-primary">Developers</h1>
      <p className="lead">
        <i className="fab fa-connectdevelop"></i>{' '}
        Browse and connect with developers
      </p>
      <div className="profiles">
        { profiles.length > 0 ? (
          profiles.map(profile => (
            <ProfileItem key={profile._id} profile={profile}/>
          ))
        ) : (
          <h4>No profiles found...</h4>
        )}
      </div>
    </React.Fragment>
  );
}

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

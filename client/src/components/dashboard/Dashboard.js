import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Spinner } from '../layout/Spinner';
import { Link } from 'react-router-dom';
import { DashboardActions } from './DashboardActions';
import { Experience } from './Experience';
import { Education } from './Education';

export const Dashboard = ({
  getProfile, 
  user: { user }, 
  profile: { loading, profile },
  deleteExperience,
  deleteEducation,
  deleteAccount
}) => {

  useEffect(() => {
    if (!profile) {
      getProfile();
    }
  }, [getProfile, profile]);

  return loading && profile === null ? <Spinner/> : (
    <React.Fragment>
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user"></i>{' '}
        Welcome {user && user.name}
      </p>
      {profile !== null ? (
        <React.Fragment>
          <DashboardActions/>
          <Experience experience={profile.experience} deleteExperience={deleteExperience}/>
          <Education education={profile.education} deleteEducation={deleteEducation}/>
          <div className="my-2">
            <button className="btn btn-danger" onClick={deleteAccount}>
              <i className="fas fa-user-minus"></i>{' '}
              Delete my account
            </button>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to='/create-profile' className="btn btn-primary my-1">
            Create Profile
          </Link>
          <button className="btn btn-danger" onClick={deleteAccount}>
            <i className="fas fa-user-minus"></i>{' '}
            Delete my account
          </button>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

Dashboard.propTypes = {
  getProfile: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  deleteExperience: PropTypes.func.isRequired,
  deleteEducation: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
};

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { Spinner } from '../layout/Spinner';
import { ProfileTop } from './ProfileTop';
import { ProfileAbout } from './ProfileAbout';
import { ProfileExperience } from './ProfileExperience';
import { ProfileEducation } from './ProfileEducation';
import { ProfileGithub } from './ProfileGithub';

const Profile = ({ profile: { profile, loading, repos }, user, getProfileById, getGithubRepos, match: { params } }) => {
  useEffect(() => {
    getProfileById(params.id);
  }, [getProfileById]);

  if (loading || !profile) {
    return <Spinner/>;
  }

  return (
    <React.Fragment>
      <Link to="/profiles" className="btn btn-light">Back To Profiles</Link>
      {user.isAuth && user.loading === false && user.user._id === profile.user._id && (
        <Link to="/edit-profile" className="btn btn-dark">Edit Profile</Link>
      )}
      <div className="profile-grid my-1">
        <ProfileTop profile={profile}/>
        <ProfileAbout profile={profile}/>

        <div className="profile-exp bg-white p-2">
          <h2 className="text-primary">Experience</h2>
          {
            profile.experience.length > 0 ? profile.experience.map(exp => (
              <ProfileExperience key={exp._id} experience={exp}/>
            )) : <h4>No experience credentials</h4>
          }
        </div>

        <div className="profile-edu bg-white p-2">
          <h2 className="text-primary">Education</h2>
          {
            profile.education.length > 0 ? profile.education.map(edu => (
              <ProfileEducation key={edu._id} education={edu}/>
            )) : <h4>No education credentials</h4>
          }
        </div>

        {
          profile.githubusername && (
            <ProfileGithub 
              username={profile.githubusername} 
              getGithubRepos={getGithubRepos}
              repos={repos}
            />
          )
        }
      </div>
    </React.Fragment>
  )
}

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  getProfileById: PropTypes.func.isRequired,
  getGithubRepos: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};

export default withRouter(Profile);

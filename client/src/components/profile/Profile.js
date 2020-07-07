import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { Spinner } from '../layout/Spinner';
import { ProfileTop } from './ProfileTop';
import { ProfileAbout } from './ProfileAbout';
import { ProfileExperience } from './ProfileExperience';
import { ProfileEducation } from './ProfileEducation';

const Profile = ({ profile: { profile, loading }, user, getProfileById, match: { params } }) => {
  useEffect(() => {
    getProfileById(params.id);
  }, [getProfileById]);

  if (loading || !profile) {
    return <Spinner/>;
  }

  return (
    <React.Fragment>
      <Link to="/profiles" className="btn btn-light">Back To Profiles</Link>
      {user.isAuth && user.loading === false && (
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

        {/* <div className="profile-github">
          <h2 className="text-primary my-1">
            <i className="fab fa-github"></i> Github Repos
          </h2>
          <div className="repo bg-white p-1 my-1">
            <div>
              <h4><a href="#" target="_blank"
                  rel="noopener noreferrer">Repo One</a></h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, laborum!
              </p>
            </div>
            <div>
              <ul>
                <li className="badge badge-primary">Stars: 44</li>
                <li className="badge badge-dark">Watchers: 21</li>
                <li className="badge badge-light">Forks: 25</li>
              </ul>
            </div>
          </div>
          
          <div className="repo bg-white p-1 my-1">
            <div>
              <h4><a href="#" target="_blank"
                  rel="noopener noreferrer">Repo Two</a></h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, laborum!
              </p>
            </div>
            <div>
              <ul>
                <li className="badge badge-primary">Stars: 44</li>
                <li className="badge badge-dark">Watchers: 21</li>
                <li className="badge badge-light">Forks: 25</li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </React.Fragment>
  )
}

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  getProfileById: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};

export default withRouter(Profile);

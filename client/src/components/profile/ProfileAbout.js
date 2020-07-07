import React from 'react';
import PropTypes from 'prop-types';

export const ProfileAbout = ({ 
  profile: { 
    user: { name },
    bio,
    skills,
  } 
}) => {
  return (
    <div className="profile-about bg-light p-2">
      <h2 className="text-primary">{name} Bio</h2>
      <p>{bio }</p>
      <div className="line"></div>
      <h2 className="text-primary">Skill Set</h2>
      <div className="skills">
        {
          skills.join(',').split(',').map((skill, index) => (
            <div key={index} className="p-1">
              <i className="fa fa-check"></i>{' '}
              {skill}
            </div>
          ))
        }
        
      </div>
    </div>
  )
}

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
}

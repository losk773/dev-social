import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

export const ProfileExperience = ({experience: { company, from, to, title, description }}) => {
  return (
    <div>
      <h3 className="text-dark">{company}</h3>
      <p>
        <Moment format='YYYY/MM/DD'>{from}</Moment> - {
          to === null ? ('Now') : (<Moment format='YYYY/MM/DD'>{to}</Moment>)}
      </p>
      <p>
        <strong>Position: </strong>{' '}
        {title}
      </p>
      
      <p>
        <strong>Description: </strong>{' '}
        {description}
      </p>
    </div>
  )
}

ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired,
}

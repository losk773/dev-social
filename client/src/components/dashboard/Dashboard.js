import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

export const Dashboard = ({getProfile, user, profile}) => {

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div>
      Dashboard
    </div>
  )
}

Dashboard.propTypes = {
  getProfile: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

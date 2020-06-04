import React from 'react';
import PropTypes from 'prop-types';

export const Alert = ({alerts}) => {

  if (alerts.length === 0) return null;

  return alerts.map(alert => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

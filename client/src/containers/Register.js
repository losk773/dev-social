import { connect } from 'react-redux';
import { Register } from '../components/auth/Register';
import { setAlert, removeAlert } from '../actions';
import { v4 as uuid } from 'uuid';

const mapDispatchToProps = dispatch => {
  return {
    setAlert: (msg, alertType, timeout = 5000) => {
      const id = uuid();
      dispatch(setAlert(id, msg, alertType))

      setTimeout(() => {
        dispatch(removeAlert(id));
      }, timeout);
    },
  };
};

export default connect(null, mapDispatchToProps)(Register);
import { connect } from 'react-redux';
import { Register } from '../components/auth/Register';
import { setAlert, removeAlert } from '../actions';
import { register } from '../thunks';
import { v4 as uuid } from 'uuid';

const mapStateToProps = ({user: { isAuth }}) => ({
  isAuth,
});

const mapDispatchToProps = dispatch => {
  return {
    register: (data) => dispatch(register(data)),
    setAlert: (msg, alertType, timeout = 5000) => {
      const id = uuid();
      dispatch(setAlert(id, msg, alertType))

      setTimeout(() => {
        dispatch(removeAlert(id));
      }, timeout);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
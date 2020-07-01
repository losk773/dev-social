import { connect } from 'react-redux';
import { Register } from '../components/auth/Register';
import { setAlert, removeAlert } from '../actions';
import { register } from '../thunks';

const mapStateToProps = ({user: { isAuth }}) => ({
  isAuth,
});

const mapDispatchToProps = dispatch => {
  return {
    register: (data) => dispatch(register(data)),
    setAlert: (msg, alertType, timeout = 5000) => {
      dispatch(setAlert(msg, alertType))
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
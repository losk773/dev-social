import { connect } from 'react-redux';
import { Register } from '../components/auth/Register';
import { setAlert, removeAlert } from '../actions';
import { register, getUser } from '../thunks';

const mapStateToProps = ({user: { isAuth }}) => ({
  isAuth,
});

const mapDispatchToProps = dispatch => {
  return {
    register: async (data) => {
      await dispatch(register(data));
      await dispatch(getUser());
    },
    setAlert: (msg, alertType, timeout = 5000) => {
      dispatch(setAlert(msg, alertType))
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
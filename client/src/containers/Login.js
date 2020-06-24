import { connect } from 'react-redux';
import { Login } from '../components/auth/Login';
import { setAlert, removeAlert } from '../actions';
import { login, getUser } from '../thunks';
import { v4 as uuid } from 'uuid';

const mapStateToProps = ({user: { isAuth }}) => ({
  isAuth,
});

const mapDispatchToProps = dispatch => ({
  login: async (email, password) => {
    await dispatch(login(email, password));
    await dispatch(getUser());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
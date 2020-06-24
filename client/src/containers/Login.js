import { connect } from 'react-redux';
import { Login } from '../components/auth/Login';
import { login, getUser } from '../thunks';

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
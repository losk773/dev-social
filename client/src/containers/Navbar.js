import { connect } from 'react-redux';
import { Navbar } from '../components/layout/Navbar';
import { logoutSuccess } from '../actions';

const mapStateToProps = ({user}) => ({
  user,
});

const mapDispatchToProps = dispatch => ({
  logout: () => {
    localStorage.removeItem('token');
    dispatch(logoutSuccess());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
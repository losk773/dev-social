import { connect } from 'react-redux';
import Profile from '../components/profile/Profile';
import { getProfileById } from '../thunks';

const mapStateToProps = ({profile, user}) => ({
  profile,
  user,
});

const mapDispatchToProps = dispatch => ({
  getProfileById: (id) => dispatch(getProfileById(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
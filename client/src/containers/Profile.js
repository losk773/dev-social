import { connect } from 'react-redux';
import Profile from '../components/profile/Profile';
import { getProfileById, getGithubRepos } from '../thunks';

const mapStateToProps = ({profile, user}) => ({
  profile,
  user,
});

const mapDispatchToProps = dispatch => ({
  getProfileById: (id) => dispatch(getProfileById(id)),
  getGithubRepos: (username) => dispatch(getGithubRepos(username)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
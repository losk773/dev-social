import { connect } from 'react-redux';
import { Dashboard } from '../components/dashboard/Dashboard';
import { getProfile } from '../thunks';

const mapStateToProps = ({profile, user}) => ({
  profile,
  user,
});

const mapStateToDispatch = dispatch => ({
  getProfile: () => dispatch(getProfile())
})

export default connect(mapStateToProps, mapStateToDispatch)(Dashboard);
import { connect } from 'react-redux';
import { Dashboard } from '../components/dashboard/Dashboard';
import { getProfile, deleteExperience, deleteEducation } from '../thunks';

const mapStateToProps = ({profile, user}) => ({
  profile,
  user,
});

const mapStateToDispatch = dispatch => ({
  getProfile: () => dispatch(getProfile()),
  deleteExperience: (id) => dispatch(deleteExperience(id)),
  deleteEducation: (id) => dispatch(deleteEducation(id)),
})

export default connect(mapStateToProps, mapStateToDispatch)(Dashboard);
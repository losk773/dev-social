import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { EditProfile } from '../components/profile-forms/EditProfile';
import { createProfile, getProfile } from '../thunks';

const mapStateToProps = ({profile}) => ({
  profile
});

const mapDispatchToProps = (dispatch, { history }) => ({
  createProfile: (formData, edit) => dispatch(createProfile(formData, history, edit)),
  getProfile: () => dispatch(getProfile())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditProfile));
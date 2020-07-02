import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { CreateProfile } from '../components/profile-forms/CreateProfile';
import { createProfile } from '../thunks';

const mapDispatchToProps = (dispatch, { history }) => ({
  createProfile: (formData) => dispatch(createProfile(formData, history))
});

export default withRouter(connect(null, mapDispatchToProps)(CreateProfile));
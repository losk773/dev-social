import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { AddExperience } from '../components/profile-forms/AddExperience';
import { addExperience } from '../thunks';

const mapDispatchToProps = (dispatch, { history }) => ({
  addExperience: (formData) => dispatch(addExperience(formData, history))
});

export default withRouter(connect(null, mapDispatchToProps)(AddExperience));
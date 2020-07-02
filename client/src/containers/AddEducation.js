import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { AddEducation } from '../components/profile-forms/AddEducation';
import { addEducation } from '../thunks';

const mapDispatchToProps = (dispatch, { history }) => ({
  addEducation: (formData) => dispatch(addEducation(formData, history))
});

export default withRouter(connect(null, mapDispatchToProps)(AddEducation));
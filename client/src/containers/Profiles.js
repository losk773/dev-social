import { connect } from 'react-redux';
import { Profiles } from '../components/profiles/Profiles';
import { getProfiles } from '../thunks';

const mapStateToProps = ({profile}) => ({
  profile,
});

const mapDispatchToProps = dispatch => ({
  getProfiles: () => dispatch(getProfiles()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profiles);
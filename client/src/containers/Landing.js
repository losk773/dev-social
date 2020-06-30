import { connect } from 'react-redux';
import { Landing } from '../components/layout/Landing';

const mapStateToProps = ({user: { isAuth }}) => ({
  isAuth,
});

export default connect(mapStateToProps)(Landing);
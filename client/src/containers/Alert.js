import { connect } from 'react-redux';
import { Alert } from '../components/layout/Alert';

const mapStateToProps = ({alerts}) => ({
  alerts,
});

export default connect(mapStateToProps)(Alert);
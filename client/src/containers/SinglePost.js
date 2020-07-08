import { connect } from 'react-redux';
import SinglePost from '../components/posts/SinglePost';
import { 
  getPostBytId,
} from '../thunks';

const mapStateToProps = ({post}) => ({
  post,
});

const mapDispatchToProps = dispatch => ({
  getPostBytId: (postId) => dispatch(getPostBytId(postId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);
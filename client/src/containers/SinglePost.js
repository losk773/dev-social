import { connect } from 'react-redux';
import SinglePost from '../components/posts/SinglePost';
import { 
  getPostBytId,
  addComment,
  deleteComment,
} from '../thunks';

const mapStateToProps = ({post, user}) => ({
  post,
  user,
});

const mapDispatchToProps = dispatch => ({
  getPostBytId: (postId) => dispatch(getPostBytId(postId)),
  addComment: (postId, formData) => dispatch(addComment(postId, formData)),
  deleteComment: (postId, commentId) => dispatch(deleteComment(postId, commentId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);
import { connect } from 'react-redux';
import { Posts } from '../components/posts/Posts';
import { 
  getPosts, 
  addLike, 
  removeLike, 
  deletePost,
  addPost,
} from '../thunks';

const mapStateToProps = ({user, post}) => ({
  post,
  user
});

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPosts()),
  addLike: (postId) => dispatch(addLike(postId)),
  removeLike: (postId) => dispatch(removeLike(postId)),
  deletePost: (postId) => dispatch(deletePost(postId)),
  addPost: (formData) => dispatch(addPost(formData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
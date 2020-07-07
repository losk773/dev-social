import { connect } from 'react-redux';
import { Posts } from '../components/posts/Posts';
import { getPosts } from '../thunks';

const mapStateToProps = ({post}) => ({
  post
});

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
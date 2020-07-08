import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { Spinner } from '../layout/Spinner';
import { PostItem } from './PostItem';
import { CommentForm } from './CommentForm';
import { CommentItem } from './CommentItem';

const SinglePost = ({ 
  user,
  post: { post, loading }, 
  getPostBytId, 
  match: { params },
  addComment,
  deleteComment
}) => {
  useEffect(() => {
    getPostBytId(params.id);
  }, []);

  if (loading || !post) {
    return <Spinner/>
  }

  return (
    <React.Fragment>
      <Link to="/posts" className="btn">Back to Posts</Link>
      <PostItem post={post} showActions={false}/>
      <CommentForm
        postId={post._id}
        addComment={addComment}
        deleteComment={deleteComment}
      />
      <div className="comments">
        {
          post.comments.map(comment => (
            <CommentItem 
              key={comment._id}
              user={user}
              comment={comment}
              postId={post._id}
              deleteComment={deleteComment}
            />
          ))
        }
      </div>
    </React.Fragment>
  )
}

SinglePost.propTypes = {
  match: PropTypes.object.isRequired,
  getPostBytId: PropTypes.func.isRequired,
  addComment: PropTypes.func,
  deleteComment: PropTypes.func,
  user: PropTypes.object.isRequired,
}

export default withRouter(SinglePost);

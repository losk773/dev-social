import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { Spinner } from '../layout/Spinner';
import { PostItem } from './PostItem';

const SinglePost = ({ post: { post, loading }, getPostBytId, match: { params } }) => {
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
    </React.Fragment>
  )
}

SinglePost.propTypes = {
  match: PropTypes.object.isRequired,
  getPostBytId: PropTypes.func.isRequired,
}

export default withRouter(SinglePost);

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Spinner } from '../layout/Spinner';

export const Posts = ({post: { posts, loading }, getPosts}) => {
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      test
    </div>
  )
}

Posts.propTypes = {
  post: PropTypes.array.isRequired,
  getPosts: PropTypes.func.isRequired,
}

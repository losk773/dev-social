import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Spinner } from '../layout/Spinner';
import { PostItem } from './PostItem';
import { PostForm } from './PostForm';

export const Posts = ({
  user, 
  post: { posts, loading }, 
  getPosts, 
  addLike, 
  removeLike, 
  deletePost,
  addPost,
}) => {
  useEffect(() => {
    getPosts();
  }, []);

  if (loading) {
    return <Spinner/>
  }

  return (
    <React.Fragment>
      <h1 className="large text-primary">Posts</h1>
      <p className="lead"><i className="fas fa-user"></i> Welcome to the community!</p>
      <PostForm addPost={addPost}/>
      <div className="posts">
        {
          posts.length > 0 && posts.map(post => (
            <PostItem 
              key={post._id}
              user={user}
              post={post}
              deletePost={deletePost}
              addLike={addLike}
              removeLike={removeLike}
            />
          ))
        }
      </div>
    </React.Fragment>
  )
}

Posts.propTypes = {
  post: PropTypes.array.isRequired,
  getPosts: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  addPost: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
}

import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

export const PostItem = ({ 
  user, 
  post: { 
    _id, 
    text, 
    name, 
    avatar, 
    user: userId, 
    likes, 
    comments, 
    date 
  },
  addLike,
  removeLike,
  deletePost,
}) => {

  return (
    <div className="post bg-white p-1 my-1">
      <div>
        <Link to={`/profile/${userId}`}>
          <img className="round-img" src={avatar} alt=""/>
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p className="my-1">{text}</p>
        <p className="post-date"><Moment format='YYYY/MM/DD'>{date}</Moment></p>
        <button onClick={() => addLike(_id)} type="button" className="btn btn-light">
          <i className="fas fa-thumbs-up"></i>{' '}
          <span>
            {likes.length > 0 && (
              <span>{likes.length}</span>
            )}
          </span>
        </button>
        <button 
          type="button" 
          className="btn btn-light"
          onClick={() => removeLike(_id)}
          disabled={likes.length === 0 ? 'disabled' : ''}
        >
          <i className="fas fa-thumbs-down"></i>
        </button>
        <Link to={`/post/${_id}}`} className="btn btn-primary">
          Discussion {' '}
          {comments.length > 0 && (
            <span className='comment-count'>{comments.length}</span>
          )}
        </Link>
        {!user.loading && userId === user.user._id && (
          <button  onClick={() => deletePost(_id)} type="button" className="btn btn-danger">
            <i className="fas fa-times"></i>
          </button>
        )}
      </div>
    </div>
  )
}

PostItem.propTypes = {
  user: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
}

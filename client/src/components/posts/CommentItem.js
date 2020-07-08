import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

export const CommentItem = ({
  user,
  comment: { _id, text, name, avatar, user: userId, date },
  postId, 
  deleteComment,
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
        <p className="post-date">
          Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
        </p>
        {!user.loading && userId === user.user._id && (
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => deleteComment(postId, _id)}
          >
            <i className="fas fa-times"></i>
          </button>
        )}
      </div>
    </div>
  )
}

CommentItem.propTypes = {
  comment: PropTypes.string.isRequired,
  postId: PropTypes.string.isRequired,
  deleteComment: PropTypes.func,
  user: PropTypes.object.isRequired,
}

import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const CommentForm = ({
  postId,
  addComment,
}) => {
  const [text, setText] = useState('');

  const onChange = ({target}) => setText(target.value);
  const onSubmit = e => {
    e.preventDefault();
    addComment(postId, {text});
    setText('');
  }

  return (
    <div className="post-form">
      <div className="bg-primary p">
        <h3>Leave a comment</h3>
      </div>
      <form className="form my-1" onSubmit={onSubmit}>
        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder="Leave a comment"
          value={text}
          onChange={onChange}
          required
        ></textarea>
        <input type="submit" className="btn btn-dark my-1" value="Submit" />
      </form>
    </div>
  )
}

CommentForm.propTypes = {
  postId: PropTypes.string.isRequired,
  addComment: PropTypes.func,
}

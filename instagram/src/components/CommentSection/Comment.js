import React from 'react';

const Comment = props => {
  return (
    <div className="comment">
      <p>{props.comments.username}</p>
    </div>
  );
}

export default Comment;
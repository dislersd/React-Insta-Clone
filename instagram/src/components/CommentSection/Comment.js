import React from "react";

const Comment = props => (
  <div className='comment-container'>
  {props.data.map( comment => 
    <div className='comment'>
      <span>{comment.username}</span>
      {comment.text}
    </div>
  )}
  </div>
);

export default Comment;

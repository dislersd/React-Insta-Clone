import React from "react";
import PropTypes from "prop-types";

const Comment = props => (
  <div className="comment-container">
    {props.data.map((comment, index) => (
      <div
      className="comment"
      key={index}
      >
        <span>{comment.username}</span>
        {comment.text}
      </div>
    ))}
  </div>
);

Comment.propTypes = {
  comment: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  )
};

Comment.defaultProps = {
  dummyData: []
};

export default Comment;

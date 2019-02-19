import React from "react";
import PostContainer from "./PostContainer";
import PropTypes from "prop-types";

const PostWrapper = props => {
  return (
    <div className="posts-wrapper">
      {props.dummyData.map(postObject => (
        <PostContainer key={postObject.username} dummyData={postObject} />
      ))}
    </div>
  );
};

PostWrapper.propTypes = {
  dummyData: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      thumbnailUrl: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      timestamp: PropTypes.string.isRequired,
      comment: PropTypes.arrayOf(
        PropTypes.shape({
          username: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired
        })
      )
    })
  )
};

PostWrapper.defaultProps = {
  dummyData: []
};

export default PostWrapper;

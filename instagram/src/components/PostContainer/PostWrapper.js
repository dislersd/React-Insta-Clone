import React from "react";
import PostContainer from "./PostContainer";
import PropTypes from "prop-types";
import styled from 'styled-components';

const PostsWrapper = styled.div `
  margin: 0 auto;
  width: 100%;
  min-width: 30rem;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const PostWrapper = props => {
  return (
    <PostsWrapper>
      {props.dummyData.map((postObject, index) => (
        <PostContainer 
        key={index} 
        dummyData={postObject} />
      ))}
    </PostsWrapper>
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

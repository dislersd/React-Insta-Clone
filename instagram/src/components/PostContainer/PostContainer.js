import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import './PostContainer.css'

const PostContainer = props => {
  return(
    <div className='post-container'>
      <header>
        <img src={props.dummyData.thumbnailUrl} alt=""/>
        <p> {props.dummyData.username} </p>
      </header>
      <img className='post-image' src={props.dummyData.imageUrl} alt=""/>
      <CommentSection dummyData={props.dummyData}/>
    </div>
  )
}

PostContainer.propTypes = {
  dummyData: PropTypes.shape({
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
};

PostContainer.defaultProps = {
  dummyData: []
};

export default PostContainer;
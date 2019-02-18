import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
  return(
    <div>
      <header>
        <img src={props.dummyData.thumbnailUrl} alt=""/>
        <p> {props.dummyData.username} </p>
      </header>
      <img src={props.dummyData.imageUrl} alt=""/>
      <CommentSection />
    </div>
  )
}

export default PostContainer;
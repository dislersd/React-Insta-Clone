import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
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

export default PostContainer;
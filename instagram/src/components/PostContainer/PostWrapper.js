import React from 'react';
import PostContainer from './PostContainer';

const PostWrapper = props => {
  return (
    <div className='posts-wrapper'>
      {props.dummyData.map( postObject => 
        <PostContainer 
          key={postObject.username}
          dummyData={postObject}
        />
      )}
    </div>
  )
}

export default PostWrapper;
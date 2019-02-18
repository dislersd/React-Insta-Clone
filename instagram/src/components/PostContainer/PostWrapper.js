import React from 'react';
import PostContainer from './PostContainer';

const PostWrapper = props => {
  return (
    <div>
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
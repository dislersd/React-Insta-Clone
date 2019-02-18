import React from 'react';
import Comment from './Comment';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: this.props.dummyData
    }
  }

  render() {
    return (
      <div className='comment-section-wrapper'>
        <div className='like-and-comment'></div>
        <div className="likes-counter"></div>
        <div className="comments">
          {this.state.dummyData.map( dataObject => 
            <Comment 
            comments={dataObject.comments}

            />
          )}
          
        </div>
        <input className="add-comment" />
      </div>
    );
  }
}

export default CommentSection;
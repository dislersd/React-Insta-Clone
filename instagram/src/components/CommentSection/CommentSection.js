import React from "react";
import Comment from "./Comment";
import './Comment.css'

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: this.props.dummyData
    };
  }

  render() {
    return (
      <div className="comment-section-wrapper">
        <div className="like-and-comment" />
        <div className="likes-counter" />
        <div className="comments">
          <Comment data={this.state.dummyData.comments} />
        </div>
        <input className="add-comment" />
      </div>
    );
  }
}

export default CommentSection;

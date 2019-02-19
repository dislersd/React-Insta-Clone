import React from "react";
import Comment from "./Comment";
import PropTypes from 'prop-types';
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
        <div className="like-and-comment-icons">
        <button><i className="far fa-heart"></i></button>
        <button><i className="far fa-comment"></i></button>
        </div>
        <div className="likes-counter">
          {this.state.dummyData.likes} likes
        </div> 
        <div className="comments">
          <Comment data={this.state.dummyData.comments} />
        </div>
        <form className="add-comment-form" action="">
          <input 
          className="add-comment-input"
          placeholder="Add a comment..."  
          />
          <button> ... </button>
        </form>
      </div>
    );
  }
}

CommentSection.propTypes = {
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

CommentSection.defaultProps = {
  dummyData: []
};

export default CommentSection;

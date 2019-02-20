import React from "react";
import Comment from "./Comment";
import PropTypes from 'prop-types';
import './Comment.css'

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: this.props.dummyData,
      comments: this.props.dummyData.comments,
      username: this.props.dummyData.username,
      likes: this.props.dummyData.likes,
      likedTrueFalse: false,
      inputValue: ''
    };
  }

  componentDidMount() {
    this.setState({ dummyData: this.props.dummyData})
  }

  addNewComment = (e) => {
    e.preventDefault();
    const newComment = {
      username: this.state.username,
      text: this.state.inputValue
    }
    this.setState ({
      comments: [...this.state.comments, newComment ]
    })
  }

  like = e => {

    if (this.state.likedTrueFalse === false) {
    this.setState({
      likes: this.state.likes + 1,
      likedTrueFalse: true
    })
    e.target.classList.toggle('liked')
  } else {
    this.setState({
      likes: this.state.likes - 1,
      likedTrueFalse: false
    })
    e.target.classList.toggle('liked')
  }
  }
  
  handleChanges = e => {
    console.log(this.state.inputValue)
    this.setState({
      inputValue: e.target.value
    })
  }
  
  render() {
    return (
      <div className="comment-section-wrapper">
        <div className="like-and-comment-icons">
          <button
          onClick={this.like}
          className='heart-button'
          >
          {/* font awesome */}
          <i className="far fa-heart"></i>
          </button>

          <button>
          {/* font awesome */}
          <i className="far fa-comment"></i>
          </button>
        </div>

        <div className="likes-counter">
          {this.state.likes} likes
        </div> 

        <div className="comments">
          <Comment data={this.state.comments} />
        </div>

        <form 
        className="add-comment-form"
        onSubmit={this.addNewComment}
        >
          <input 
          className="add-comment-input"
          placeholder="Add a comment..."
          value={this.state.inputValue}
          onChange={this.handleChanges}  
          />
          <button type="submit"> ... </button>
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

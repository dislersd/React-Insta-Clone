import React from 'react';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: this.props.dummyData
    }
  }

  render() {
    return (
      <div>
        hello
      </div>
    );
  }
}

export default CommentSection;
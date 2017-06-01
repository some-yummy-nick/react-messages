import React from 'react';

const Comment = React.createClass({

  getInitialState() {
    return {}
      ;
  },

  render(){
    const {author, message, timestamp}=this.props.comment;
    const time = (new Date(timestamp)).toLocaleDateString() + ' ' + (new Date(timestamp)).toLocaleTimeString();
    return (
      <div className="block">
        <div >
          <b>{author}</b>
          <span>{time}</span>
        </div>
        <div>{message}</div>
      </div>
    )
  }
});

Comment.propTypes = {
  comment: React.PropTypes.shape({
    author: React.PropTypes.string.isRequired,
    message: React.PropTypes.string.isRequired,
    timestamp: React.PropTypes.number.isRequired
  })
};

export default Comment
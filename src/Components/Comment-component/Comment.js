import React from 'react';

// CSS
import './comment.css';

function Comment(props) {
  return(
    <div className="comment-container">
      <p>{props.comment}</p>
    </div>
  )
}

export default Comment;
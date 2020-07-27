import React from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

// CSS
import './post.css';

function Post(props) {
  return (
    <div className="havenContainer">
      <h3 className="haven-title haven-text">{props.title}</h3>
      <h4 className="haven-purpose haven-text">{props.purpose}</h4>
      <p className="haven-body haven-text">{props.body}</p>
      <div className="icon-container haven-text">
        <div className="upVote-container">
          <FaArrowUp />
          <p className="upvote">{props.upvote}</p>
        </div>
        <div className="downVote-container">
          <FaArrowDown />
          <p className="downvote">{props.downvote}</p>
        </div>
      </div>
    </div>
  )
}

export default Post;
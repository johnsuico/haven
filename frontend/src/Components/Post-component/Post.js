import React from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import Axios from 'axios';

// CSS
import './post.css';

function Post(props) {

  function upvoteClick() {
    Axios.put(`http://localhost:5000/api/haven/upvote/${props.id}`);
  }
  function downvoteClick() {
    Axios.put(`http://localhost:5000/api/haven/downvote/${props.id}`);
  }

  return (
    <div className="havenContainer">
      <h3 className="haven-title haven-text">{props.title}</h3>
      <h4 className="haven-purpose haven-text">{props.purpose}</h4>
      <p className="haven-body haven-text">{props.body}</p>
      <div className="icon-container haven-text">
        <div className="upVote-container" onClick={upvoteClick}>
          <FaArrowUp />
          <p className="upvote">{props.upvote}</p>
        </div>
        <div className="downVote-container" onClick={downvoteClick}>
          <FaArrowDown />
          <p className="downvote">{props.downvote}</p>
        </div>
      </div>
    </div>
  )
}

export default Post;
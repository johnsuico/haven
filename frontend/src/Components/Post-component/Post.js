import React, { useState, useEffect } from 'react';
import { FaArrowUp, FaArrowDown, FaCommentAlt } from 'react-icons/fa';
import Axios from 'axios';
import { Link } from 'react-router-dom';

// CSS
import './post.css';

function Post(props) {

  const link = `/haven/${props.id}`;

  const [havenComments, setHavenComments] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:5000/api/haven/${props.id}/comment`)
      .then (response => {
        setHavenComments(response.data);
      })
  }, [props.id])

  return (
    <Link to={link} className="haven-link">
      <div className="havenContainer">
        <h3 className="haven-title haven-text">{props.title}</h3>
        <h4 className="haven-purpose haven-text">{props.purpose}</h4>

        { props.body.length >= 200
          ?
            <p className="haven-body haven-text">{props.body.slice(0, 200)}...</p>
          :
            <p className="haven-body haven-text">{props.body}</p>
        }

        <div className="icon-container haven-text">
          <div className="upVote-container">
            <FaArrowUp />
            <p className="upvote">{props.upvote}</p>
          </div>
          <div className="downVote-container">
            <FaArrowDown />
            <p className="downvote">{props.downvote}</p>
          </div>
          <div className="commentCounter-container">
            <FaCommentAlt />
            <p className="commentCounter">{havenComments.length}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Post;
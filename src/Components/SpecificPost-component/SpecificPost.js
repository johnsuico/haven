import React, { useEffect, useState } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import Axios from 'axios';
import { useParams } from 'react-router-dom'

// CSS
import './specificPost.css';

import Comment from '../Comment-component/Comment';

function SpecificPost() {

  const { id } = useParams(); 
  const [haven, setHaven] = useState({});
  const [havenComments, setHavenComments] = useState([]);
  const [newComment, setNewComment] = useState('');


  function onCommentChange(e) {
    setNewComment(e.target.value);
  }

  useEffect( ()=> {
    Axios.get(`http://localhost:5000/api/haven/${id}`)
      .then(response => {
        setHaven(response.data);
      })
    Axios.get(`http://localhost:5000/api/haven/${id}/comment`)
      .then (response => {
        setHavenComments(response.data);
      })
  }, [id, havenComments])

  function upvoteClick() {
    Axios.put(`http://localhost:5000/api/haven/upvote/${haven._id}`);
  }
  function downvoteClick() {
    Axios.put(`http://localhost:5000/api/haven/downvote/${haven._id}`);
  }
  function postComment(e) {
    Axios.post(`http://localhost:5000/api/haven/${haven._id}/comment`, {
      comment: newComment
    })
    .then((res) => {
      console.log("Successfully sent new comment");
    })
  }

  return(
      <div className="specificPost">
        <div className="specificPost-container">
          <h2 className="specificPost-title">{haven.title}</h2>

          {/* Second Level of headings */}
          <div className="specificPost-second-level-container">

            {/* Post Purpose */}
            <h2 className="specificPost-purpose">Purpose: {haven.purpose}</h2>

            {/* Icon container */}
            <div className="specificPost-icon-container">
              <div className="upVote-container" onClick={upvoteClick}>
                <FaArrowUp />
                <p className="upvote">{haven.upvote}</p>
              </div>
              <div className="downVote-container" onClick={downvoteClick}>
                <FaArrowDown />
                <p className="downvote">{haven.downvote}</p>
              </div>
            </div>

          </div>

          {/* Post Body Container */}
          <div className="specificPost-context-container">
            <h2>Body:</h2>
            <p>{haven.body}</p>
          </div>

          {/* Comment section */}
          <div className="add-comment-container">
            <h3 className="add-comment-title add-comment-item">Add comment</h3>
            <form className="add-comment-form add-comment-item" onSubmit={postComment}>
              <label>Write comment: </label>
              <textarea cols="30" rows="3" onChange={onCommentChange} value={newComment}></textarea>
              <input type="submit" value="Post Comment"/>
            </form>
          </div> 

          {/* Read Comments */}
          <div className="comment-list">
            {havenComments.map(comment => {
              return <Comment key={comment._id} comment={comment.comment} />
            })}
          </div>

        </div> 
      </div>
  )
}

export default SpecificPost;
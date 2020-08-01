import React, { useEffect, useState } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import Axios from 'axios';
import { useParams } from 'react-router-dom'

// CSS
import './specificPost.css';

function SpecificPost() {

  const { id } = useParams(); 
  const [haven, setHaven] = useState({});

  useEffect( ()=> {
    Axios.get(`http://localhost:5000/api/haven/${id}`)
      .then(response => {
        setHaven(response.data);
      })
  })

  function upvoteClick() {
    Axios.put(`http://localhost:5000/api/haven/upvote/${haven._id}`);
  }
  function downvoteClick() {
    Axios.put(`http://localhost:5000/api/haven/downvote/${haven._id}`);
  }

  return(
    <div className="bg">
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
        </div>
      </div>
    </div>
  )
}

export default SpecificPost;
import React, { useEffect, useState } from 'react';
import Axios from 'axios';

// CSS
import './postList.css';

function PostList() {

  const [havenArray, setHavenArray] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:5000/api/haven')
      .then( response => {
        setHavenArray(response.data);
      })
  })

  return (
    <div className="bg">
      <div className="postList">
        <div className="postList-container">
          <h2 className="postList-title">Anonymous Posts</h2>
          <div className="postList-posts">
            {havenArray.map(haven => 
              <div className="havenContainer" key={haven._id}>
                <h3>{haven.title}</h3>
                <h4>{haven.purpose}</h4>
                <p className="havenBody">{haven.body}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostList;
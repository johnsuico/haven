import React, { useEffect, useState } from 'react';
import Axios from 'axios';

// CSS
import './postList.css';

import Post from '../Post-component/Post';

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
              <Post 
                title={haven.title}
                purpose={haven.purpose}
                body={haven.body}
                key={haven._id}

              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostList;
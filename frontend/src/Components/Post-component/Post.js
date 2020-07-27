import React from 'react';

// CSS
import './post.css';

function Post(props) {
  return (
    <div className="havenContainer">
      <h3>{props.title}</h3>
      <h4>{props.purpose}</h4>
      <p className="havenBody">{props.body}</p>
    </div>
  )
}

export default Post;
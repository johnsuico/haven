import React, { useEffect, useState } from 'react';
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

  return(
    <div className="bg">
      <div className="specificPost">
        <div className="specificPost-container">
          <h2 className="specificPost-title">{haven.title}</h2>
          <h2 className="specificPost-purpose">Purpose: {haven.purpose}</h2>
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
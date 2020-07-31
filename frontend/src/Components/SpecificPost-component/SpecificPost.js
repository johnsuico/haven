import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom'

// CSS
import './specificPost.css';

function SpecificPost() {

  const { id } = useParams(); 

  const [haven, setHaven] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect( ()=> {
    Axios.get(`http://localhost:5000/api/haven/${id}`)
      .then(response => {
        setHaven(response.data);
        setLoading(false);
      })
  })

  return(
    <div className="bg">
      <div className="specificPost">
        <div className="specificPost-container">

        </div>
      </div>
    </div>
  )
}

export default SpecificPost;
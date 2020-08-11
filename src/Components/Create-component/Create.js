import React, { useState } from 'react';
import Axios from 'axios';

// CSS
import './create.css';

function Create() {

  const [title, setTitle] = useState('');
  const [purpose, setPurpose] = useState('');
  const [body, setBody] = useState('');

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }
  function handlePurposeChange(event) {
    setPurpose(event.target.value);
  }
  function handleBodyChange(event) {
    setBody(event.target.value);
  }

  function handleCreateSubmit(event) {
    event.preventDefault();
    Axios.post('http://localhost:5000/api/haven', {
      title: title,
      purpose: purpose,
      body: body
    })
    .then((res) => {
      console.log("Successfully sent axios request");
      window.location.replace('/posts');
    })
  }

  return(
    <div className="bg">
      <div className="create">
        <div className="create-container">
          <h1 className="create-title">Create your anonymous post</h1>
            <form className="create-form" onSubmit={handleCreateSubmit}>
              <div className="create-form-section">
                <label className="create-form-label">
                  Title
                </label>
                <input type="text" className="create-form-text-input" value={title} onChange={handleTitleChange} required/>
              </div>
              <div className="create-form-section">
                <label className="create-form-label">
                  Purpose
                </label>
                <input type="text" className="create-form-text-input" onChange={handlePurposeChange} value={purpose}/>
              </div>
              <div className="create-form-section">
                <label className="create-form-label">
                  Body
                </label>
                <textarea className="create-form-textarea" rows="22" value ={body} onChange={handleBodyChange} required></textarea>
              </div>
              <div className="form-submit">
                <input type="submit" value="Post" className="create-form-submit"/>
              </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Create;
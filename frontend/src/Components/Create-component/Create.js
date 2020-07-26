import React from 'react';

// CSS
import './create.css';

function Create() {
  return(
    <div className="bg">
      <div className="create">
        <div className="create-container">
          <h1 className="create-title">Create your anonymous post</h1>
            <form className="create-form">
              <div className="create-form-section">
                <label className="create-form-label">
                  Title
                </label>
                <input type="text" className="create-form-text-input"/>
              </div>
              <div className="create-form-section">
                <label className="create-form-label">
                  Purpose
                </label>
                <input type="text" className="create-form-text-input"/>
              </div>
              <div className="create-form-section">
                <label className="create-form-label">
                  Body
                </label>
                <textarea className="create-form-textarea" rows="22"></textarea>
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
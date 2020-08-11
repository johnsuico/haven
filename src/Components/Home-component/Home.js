import React from 'react';
import { Link } from 'react-router-dom';

// CSS
import './home.css';

function Home() {
  return(
    <div className="bg">
      <div className="home">
        <div className="hero-texts">
          <div className="hero-caption">
            <h1>Haven</h1>
          </div>
          <div className="hero-subcaption">
            <h2>speak your mind anonymously.</h2>
          </div>
          <div className="hero-cta">
            <Link to="/create" className="hero-cta-btn">start writing</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
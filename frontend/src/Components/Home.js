import React from 'react';
import { Link } from 'react-router-dom';

// CSS
import './home.css';

function Home() {
  return(
    <div className="home-bg">
      <div className="home">
        <div className="hero-texts">
          <div className="hero-caption">
            <h1>Haven</h1>
          </div>
          <div className="sub-caption">
            <h3>speak your mind anonymously.</h3>
          </div>
          <div className="hero-cta">
            <Link to="/create">start writing</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
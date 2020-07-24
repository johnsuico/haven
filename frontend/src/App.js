import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <nav className="navbar">
          {/* <div className="container"> */}
            <div className="navbar-items">
              <div className="nav-logo">
                <Link to="/" className="nav-link">Haven</Link>
              </div>
              <div className="nav-links">
                <Link to="/posts" className="nav-link">Posts</Link>
                <Link to="/create" className="nav-link">Write</Link>
              </div>
            </div>
          {/* </div> */}
        </nav>

        <Switch>
          <Route path="/" exact>
            {/* Home Page */}
          </Route>
          <Route path="/posts">
            {/* Posts Page */}
          </Route>
          <Route path="/create">
            {/* Create post page */}
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;

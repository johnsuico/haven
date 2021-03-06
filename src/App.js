import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

// Components
import Home from './Components/Home-component/Home';
import Create from './Components/Create-component/Create';
import PostList from './Components/PostList-component/PostList';
import SpecificPost from './Components/SpecificPost-component/SpecificPost';

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
            <Home />
          </Route>
          <Route path="/posts">
            <PostList />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/haven/:id">
            <SpecificPost />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;

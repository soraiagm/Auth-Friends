import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';

import Login from './components/Login.js';
import Friends from './components/Friends.js';
import PrivateRoute from './components/PrivateRoute.js';

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <Link to="/login">Login</Link>
        <Link to="/protected">Friends</Link>
      </nav>

      <Switch>
        <Route path="/login" component={Login} /> 
        <Route component={Login} />
        <PrivateRoute path="/protected" component={Friends} />
      </Switch>
      
      
    </div>
  );
}

export default App;

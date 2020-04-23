import React from 'react';

import './App.css';
import Login from './components/Login'
import { BrowserRouter as Router,
  Switch,
  Route, Link } from 'react-router-dom'
  import PrivateRoute from './components/PrivateRoute'
import FriendsList from './components/FriendsList'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <p>
          <Link to="/login">Login</Link>
          </p>
          <p>
          <Link to="/protected">Protected Page</Link>
          </p>

        </header>
        <Switch>
        <PrivateRoute exact path="/protected" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

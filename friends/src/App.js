import React from 'react';
import './App.css';

import { Switch, Link } from 'react-router';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import FriendList from './components/FriendList';
import Login from './components/Login';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';
import axiosWithAuth from './utils/axiosWithAuth';



function App() {
  const isLoggedIn = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  const username = localStorage.getItem('username');
  return (
    
    <Router>
    <div className="App">
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        
        <li>
          <Link to="/logout">Logout</Link>
        </li>
        <li>
          {(role === 'admin' && isLoggedIn) && <Link to="/logout">Admin</Link> }
        </li>
        <li>
          {isLoggedIn && <div>
              <Link to="/friends/add-new">Add Fiends </Link>
              <p>Welcome to the page: {username}</p>
            </div>
          }
        </li>
      </ul>
      <Switch>
        <PrivateRoute exact path="/friends/add-new" component={AddFriendForm} />
        <PrivateRoute exact path="/friends" component={FriendList} />
        {/* <Route exact path="/protected" component={GasPrices} /> */}
        <Route path="/logout" component={Logout} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Login} />    
      </Switch>
    </div>
  </Router>
  );
}

export default App;

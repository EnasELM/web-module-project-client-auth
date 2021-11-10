import React, { useHistory } from 'react';
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';
class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
    
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
   
    axiosWithAuth()
   
    .post('/api/login', this.state.credentials)
      .then(resp=> {
        
        localStorage.setItem('token', resp.data.payload);
        this.props.history.push('/friends');
        console.log('resp',resp)
      })
      .catch(err=> {
        
        console.log(err);
      })
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;
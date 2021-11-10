import React from 'react';
import moment from 'moment';
import Loader from 'react-loader-spinner';
import axiosWithAuth from './../utils/axiosWithAuth';

class FriendList extends React.Component {
  state = {
    friend: []
  };
  
  componentDidMount() {
    console.log("friend", this.props);

    axiosWithAuth()
      .get(`/api/friends`)
      .then(resp=> {
        this.setState({
          ...this.state,
          friend: resp.data.friends
        });
      })
      .catch(err=> {
        console.log(err);
      })
  }

  

  render(){ 
   return(<div>{this.state.friend}</div>) 
  }
}

export default FriendList;

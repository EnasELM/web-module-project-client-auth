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
          friend: resp.data
        });
      })
      .catch(err=> {
        console.log(err);
      })
  }

  

  render(){ 
   return(<div>
    <h3> Current Friends</h3>
    {this.state.friend.map((fri)=> (<p key={fri.id}> {fri.name}</p>))}
   </div>) 
  }
}

export default FriendList;

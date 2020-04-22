import React from 'react';

import { axiosWithAuth } from './axiosWithAuth';

class FriendsList extends React.Component {
    state = {
        friendsList: []
      };

      componentDidMount() {
        this.getData();
      }

      getData = () => {
        // request data with the token
        // set the data to state
    
        axiosWithAuth()
          .get('/api/friends')
          .then(res => {
            // res.data.data
            this.setState({
              friendsList: [...this.state.friendsList, ...res.data ]
            });
          })
          .catch(err => console.log({ err }));
      };

      render() {
          return(
              <div>
                  <h1 className = {"friendsTitle"}> Welcome to your friends list:</h1>
                  {this.state.friendsList.map(X => {
                      return <div>
                          <h3>{X.name}</h3>
                          <p>Age: {X.name}</p>
                          <p>Email: {X.email}</p>
                      </div>
                  })}
              </div>
          )
      }
}

export default FriendsList;
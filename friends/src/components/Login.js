import React from "react";
import Loader from 'react-loader-spinner';
import { axiosWithAuth } from "./axiosWithAuth";


class Login extends React.Component {
    //setting state
    state = {
      credentials: {
        username: '',
        password: '',
        isLoading: <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      }
    };

    //creating hadleChange
    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    //creating onSubmit login
    login = e => {
        e.preventDefault();
         axiosWithAuth()
          .post('/api/login', this.state.credentials)
          .then(res => {
            localStorage.setItem('token', JSON.stringify(res.data.payload));
            this.props.history.push('/protected');
          })
          .catch(err => console.log({ err }));
      };

    //creating form
    render(){
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
        )
    }
}

export default Login;
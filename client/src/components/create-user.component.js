import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
    }
  }

  onChangeUsername(event) {
    this.setState({
      username: event.target.value
    })
  }

  onSubmit(event) {
    event.preventDefault();

    const user = {
      username: this.state.username,
    }

    console.log('user', user);

    axios.post('/users/add', user)
    .then(response => console.log('response.data', response.data))
    .catch(error => console.log('error', error))

    this.setState({
      username: ''
    })
  }

  render() {
    return (
      <div>
      <h3>Create a new user</h3>
      <form onSubmit={this.onSubmit}>
        <div className="row">
          <div className="form-group col s6">
            <label>Username: </label>
            <input type="text"
              required
              className="form-control"
              placeholder="Please input username"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
        </div>

        <div className="row"><div className="form-group col s6">
          <input type="submit" value="Create User" className="btn btn-primary" />
        </div></div>

      </form>
    </div>
    )
  }
}
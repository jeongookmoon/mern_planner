import React, { Component } from 'react';
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

export default class CreatePlan extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: []
    }
  }


  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
            username: response.data[0].username
          })
        }
      })
  }

  onChangeUsername(event) {
    this.setState({
      username: event.target.value
    })
  }

  onChangeDescription(event) {
    this.setState({
      description: event.target.value
    })
  }

  onChangeDuration(event) {
    this.setState({
      duration: event.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date
    })
  }

  onSubmit(event) {
    event.preventDefault();

    const plan = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    }

    console.log('plan', plan);

    axios.post('http://localhost:5000/plans/add', plan)
      .then(response => console.log('response', response))
      .catch(error => console.log('error', error))

    window.location = '/';
  }

  render() {
    return (
      <div>
        <h3>Create a new plan</h3>
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="form-group col s6">
              <label>Username: </label>
              <select
                required
                className="browser-default form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}>
                {
                  this.state.users.map((user) => {
                    console.log('user', user);
                    return <option
                      key={user}
                      value={user}>
                      {user}
                    </option>;
                  })
                }
              </select>
            </div>
          </div>
          <div className="row">
            <div className="form-group col s6">
              <label>Description: </label>
              <input type="text"
                required
                className="form-control"
                placeholder="Describe your plan"
                value={this.state.description}
                onChange={this.onChangeDescription}
              />
            </div>
          </div>

          <div className="row">
            <div className="form-group col s6">
              <label>Duration (in hours): </label>
              <input type="text"
                required
                className="form-control"
                placeholder="0"
                value={this.state.duration}
                onChange={this.onChangeDuration}
              />
            </div>
          </div>

          <div className="row"><div className="form-group col s6">
            <label>Date: </label>
            <Datepicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div></div>

          <div className="row"><div className="form-group col s6">
            <input type="submit" value="Create a plan" className="btn btn-primary" />
          </div></div>

        </form>
      </div>
    )
  }
}
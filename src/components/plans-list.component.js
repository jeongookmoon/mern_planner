import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Plan = props => (
  <tr>
    <td>{props.plan.username}</td>
    <td>{props.plan.description}</td>
    <td>{props.plan.duration}</td>
    <td>{props.plan.date.substring(0, 10)}</td>
    <td>
      <Link to={"/edit/" + props.plan._id}>edit</Link> | <a href="#" onClick={() => { props.deletePlan(props.plan._id) }}>delete</a>
    </td>
  </tr>
)

export default class PlansList extends Component {
  constructor(props) {
    super(props);

    this.deletePlan = this.deletePlan.bind(this);

    this.state = { plans: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/plans/')
      .then(response => {
        this.setState({
          plans: response.data
        })
      })
      .catch(error => console.log('error', error));
  }

  deletePlan(id) {
    axios.delete('http://localhost:5000/plans' + id)
      .then(response => console.log('response', response))
      .catch(error => console.log('error', error));

    this.setState({
      plans: this.state.exercises.filter(element => element._id != id)
    });
  }

  planList() {
    return this.state.plans.map(currentPlan => {
      return <Plan plan={currentPlan} deletePlan={this.deletePlan} key={currentPlan._id} />
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Plans</h3>
        <table className="Table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {this.planList()}
          </tbody>
        </table>
      </div>
    )
  }
}
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <div class="nav-wrapper">
          <Link to="/" class="brand-logo">Planner</Link>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><Link to="/">Plans</Link></li>
            <li><Link to="/create">Create Plan</Link></li>
            <li><Link to="/user">Create User</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}
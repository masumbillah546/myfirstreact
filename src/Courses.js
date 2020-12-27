import React, { Component } from 'react';
import { NavLink, Route, Redirect } from 'react-router-dom';

import html from './courses/HTML';
import css from './courses/CSS';
import JavaScript from './courses/JavaScript';

class Courses extends Component {
  render() {
    return (
      <div className="main-content courses">
        <div className="course-header group">
          <h2>Courses</h2>
          <ul className="course-nav">
            <li><NavLink to='/courses/html'>HTML</NavLink></li>
            <li><NavLink to='/courses/css'>CSS</NavLink></li>
            <li><NavLink to='/courses/javascript'>JavaScript</NavLink></li>
          </ul>
        </div>
        <Redirect from="/" to="/courses/html" />
        <Route path="/courses/html" component={ html } />
        <Route path="/courses/css" component={ css } />
        <Route path="/courses/javascript" component={ JavaScript } />
        { this.props.children }
      </div>
    );
  }
};

export default Courses;
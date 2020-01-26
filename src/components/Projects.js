import React from 'react';
import Card from './Card';
import {ProjectList} from './ProjectList';
import './Projects.css';

class Projects extends React.Component {
  render () {

    const projects = ProjectList.map((project, i) => {
      return (
        <Card {...project} key={i} />
      )
    });

    return (
      <div id="projects-container">
        <div id="projects-content">
          <h1>My <span className="blue">Projects</span></h1>
          <div id="projects-list">
            { projects }
          </div>
        </div>
      </div>
    )
  }
}

export default Projects;
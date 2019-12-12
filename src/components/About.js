import React from 'react';
import './About.css';

class About extends React.Component {
  render () {
    return (
      <div id="about-container">
        <div id="about-content">
          <h1>About <span className="blue">Me</span></h1>
        </div>
      </div>
    )
  }
}

export default About;
import React from 'react';
import './Profile.css';


class Profile extends React.Component {
  render () {
    return (
      <div id="profile">
        <img id="profile-header" src='/images/low_poly_bg.jpg' alt='low-poly background'/>
        <h1>Will Ryan III</h1>
        <h3 className="blue">Web Developer</h3>
        <div id="social">
          <a href="https://www.linkedin.com/in/willpaulryan/" title="Add me on LinkedIn" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M29 0h-26c-1.6 0-3 1.4-3 3v26c0 1.7 1.4 3 3 3h26c1.7 0 3-1.3 3-3v-26c0-1.6-1.3-3-3-3zM12 26h-4v-14h4v14zM10 10c-1.1 0-2-0.9-2-2s0.9-2 2-2c1.1 0 2 0.9 2 2s-0.9 2-2 2zM26 26h-4v-8c0-1.1-0.9-2-2-2s-2 0.9-2 2v8h-4v-14h4v2.5c0.8-1.1 2.1-2.5 3.5-2.5 2.5 0 4.5 2.2 4.5 5v9z"/></svg>
          </a>
          <a href="https://github.com/WillPaulRyan" title="Follow me on Github" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M16 0.4c-8.8 0-16 7.2-16 16 0 7.1 4.6 13.1 10.9 15.2 0.8 0.1 1.1-0.3 1.1-0.8 0-0.4 0-1.6 0-3-4.5 1-5.4-1.9-5.4-1.9-0.7-1.8-1.8-2.3-1.8-2.3-1.5-1 0.1-1 0.1-1 1.6 0.1 2.5 1.6 2.5 1.6 1.4 2.4 3.7 1.7 4.7 1.3 0.1-1 0.6-1.7 1-2.1-3.6-0.4-7.3-1.8-7.3-7.9 0-1.7 0.6-3.2 1.6-4.3-0.2-0.4-0.7-2 0.2-4.2 0 0 1.3-0.4 4.4 1.6 1.3-0.4 2.6-0.5 4-0.5 1.4 0 2.7 0.2 4 0.5 3.1-2.1 4.4-1.6 4.4-1.6 0.9 2.2 0.3 3.8 0.2 4.2 1 1.1 1.6 2.5 1.6 4.3 0 6.1-3.7 7.5-7.3 7.9 0.6 0.5 1.1 1.5 1.1 3 0 2.1 0 3.9 0 4.4 0 0.4 0.3 0.9 1.1 0.8 6.4-2.1 10.9-8.1 10.9-15.2 0-8.8-7.2-16-16-16z"/></svg>
          </a>
          <a href="https://codepen.io/willpaulryan" title="Check out my ideas at Codepen" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M29.6 11.5l-14-9.3c-0.3-0.2-0.8-0.2-1.1 0l-14 9.3c-0.3 0.2-0.4 0.5-0.4 0.8v9.3c0 0.3 0.2 0.6 0.4 0.8l14 9.3c0.2 0.1 0.4 0.2 0.6 0.2s0.4-0.1 0.6-0.2l14-9.3c0.3-0.2 0.4-0.5 0.4-0.8v-9.3c0-0.3-0.2-0.6-0.4-0.8zM15 20.5l-5.2-3.5 5.2-3.5 5.2 3.5-5.2 3.5zM16 11.8v-6.9l11.2 7.5-5.2 3.5-6-4zM14 11.8l-6 4-5.2-3.5 11.2-7.5v6.9zM6.2 17l-4.2 2.8v-5.6l4.2 2.8zM8 18.2l6 4v6.9l-11.2-7.5 5.2-3.5zM16 22.2l6-4 5.2 3.5-11.2 7.5v-6.9zM23.8 17l4.2-2.8v5.6l-4.2-2.8z"/></svg>
          </a>
        </div>
        <a id="cv" href="./Will%20Ryan%20CV.pdf" title="Download my CV" target="_blank" download><h4>Download CV</h4></a>
      </div>
    )
  }
}

export default Profile;
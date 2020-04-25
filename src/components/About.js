import React from 'react';
import './About.css';

class About extends React.Component {
  render () {
    return (
      <div id="about-container">
        <div id="about">
          <section>
            <h1><span className="blue">About</span> Me</h1>
            <p>My name is <span className="big">Will</span> and I'm a web developer
              from <span className="big">Louisville</span>, <span className="big">Kentucky</span>.
            </p>
          </section>
          <section>
            <h3>Technologies</h3>
            <p>
              I have experience working with <span className="big">Javascript</span> frameworks <span className="big">React</span>
              , <span className="big">Node</span>, and <span className="big">Gatsby</span>, 
              as well as with <span className="big">Python</span>, <span className="big">Octave</span>
              ,  <span className="big">Wordpress</span>, and <span className="big">C</span>.
            </p>
            <p>
              I have done design work in <span className="big">Photoshop</span>, <span className="big">Illustrator</span>, 
              and <span className="big">Figma</span>, and I use <span className="big">Git</span> for collaboration and version control.
            </p>
          </section>
          <section>
            <h3>Background</h3>
            <p>
              Before programming, I worked as a <span className="big">PR agent</span>, an <span className="big">English teacher</span>
              , a <span className="big">journalist</span>, a <span className="big">librarian</span>, and a <span className="big">professional musician</span>.
            </p>
            <p>
              I speak <span className="big">English</span>, <span className="big">Spanish</span>, and <span className="big">Vietnamese</span>, and I hold a 
              bachelor's degree from the <span className="big">University of Louisville</span>.
            </p>
            <p>
              For more information, please see my <span className="big"><a href="./willRyanCV.pdf" target="_blank" download>CV</a></span>.
            </p>
          </section>
        </div>
        <span className="big"></span>
      </div>
    )
  }
}

export default About;
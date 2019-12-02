import React from 'react';
import './Projects.css';

class Projects extends React.Component {
  render () {
    let array = [
      {
        name: "Tommy Frozen Yogurt",
        pic: "https://www.sampletherapy.com/uploads/6/5/8/3/65832467/samples-therapy-exterior_orig.jpg",
        url: "https://tommyfrozen.com/",
        github: "https://github.com/WillPaulRyan/tommy"
      },
      {
        name: "wr3.xyz",
        pic: "https://www.visioncritical.com/hubfs/Imported_Blog_Media/BLG_Andrew-G_-River-Sample_09_13_12.png",
        url: "https://wr3.xyz",
        github: "https://github.com/WillPaulRyan/portfolio"
      },
      {
        name: "2020 Odds",
        pic: "https://www.roadrunnerrecords.com/sites/g/files/g2000005056/f/sample-4.jpg",
        url: "http://www.2020-odds.com/",
        github: "https://github.com/WillPaulRyan/2020-odds"
      },
      {
        name: "Emoji Speller",
        pic: "https://ysjournal.com/wp-content/uploads/2014/03/sample_overlay.gif",
        url: "http://www.emojispeller.com/",
        github: "https://github.com/WillPaulRyan/emoji-speller"
      },
      {
        name: "Virtual Monkeys",
        pic: "https://images.everydayhealth.com/images/endomorph-diet-food-list-722x406.jpg",
        url: "https://willpaulryan.github.io/virtual-monkeys/",
        github: "https://github.com/WillPaulRyan/virtual-monkeys"
      },
      {
        name: "React Flashcards",
        pic: "https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg",
        url: "https://willpaulryan.github.io/flashcards/",
        github: "https://github.com/WillPaulRyan/flashcards"
      }
    ];

    let projects = array.map((project, i) => {
      return (
        <div key={i} className="project">
          <img src={project.pic} alt={project.name} title={project.name}></img>
          <div className="project-links">
            <a href={project.url} title="View site" target="_blank" rel="noopener noreferrer"><i className="fas fa-eye"></i></a>
            <a href={project.github} title="View code" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          </div>
        </div>
      )
    });

    return (
      <div id="projects-container">
        <div id="projects-content">
          <h1>My Projects</h1>
          <div id="projects-list">
            { projects }
          </div>
        </div>
      </div>
    )
  }
}

export default Projects;
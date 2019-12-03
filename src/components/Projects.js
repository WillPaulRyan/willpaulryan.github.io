import React from 'react';
import './Projects.css';

class Projects extends React.Component {
  render () {
    let array = [
      {
        name: "Tommy Frozen Yogurt",
        pic: "/images/tommy_ogp.png",
        url: "https://tommyfrozen.com/",
        github: "https://github.com/WillPaulRyan/tommy"
      },
      {
        name: "wr3.xyz",
        pic: "/images/wr3_ogp.png",
        url: "https://wr3.xyz",
        github: "https://github.com/WillPaulRyan/portfolio"
      },
      {
        name: "2020 Odds",
        pic: "/images/2020_ogp.png",
        url: "http://www.2020-odds.com/",
        github: "https://github.com/WillPaulRyan/2020-odds"
      },
      {
        name: "Emoji Speller",
        pic: "/images/emoji_speller_ogp.png",
        url: "http://www.emojispeller.com/",
        github: "https://github.com/WillPaulRyan/emoji-speller"
      },
      {
        name: "Virtual Monkeys",
        pic: "/images/virtual_monkeys_ogp.png",
        url: "https://willpaulryan.github.io/virtual-monkeys/",
        github: "https://github.com/WillPaulRyan/virtual-monkeys"
      },
      {
        name: "React Flashcards",
        pic: "/images/flashcards_ogp.png",
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
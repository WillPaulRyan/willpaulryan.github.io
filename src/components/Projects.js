import React from 'react';
import Card from './Card';
import './Projects.css';

class Projects extends React.Component {
  render () {
    let array = [
      {
        name: "Tommy Frozen Yogurt",
        pic: "/images/tommy_ogp.png",
        description: "A SourceCOL client: a frozen yogurt shop in Rionegro, Colombia",
        url: "https://tommyfrozen.com/",
        github: "https://github.com/WillPaulRyan/tommy"
      },
      {
        name: "wr3.xyz",
        pic: "/images/wr3_ogp.png",
        description: "My personal portfolio website, built in React",
        url: "https://wr3.xyz",
        github: "https://github.com/WillPaulRyan/portfolio"
      },
      {
        name: "2020 Odds",
        pic: "/images/2020_ogp.png",
        description: "A Flask app tracking the 2020 US Presidential Election",
        url: "http://www.2020-odds.com/",
        github: "https://github.com/WillPaulRyan/2020-odds"
      },
      {
        name: "Emoji Speller",
        pic: "/images/emoji_speller_ogp.png",
        description: "A javascript app for transforming plaintext into emoji",
        url: "http://www.emojispeller.com/",
        github: "https://github.com/WillPaulRyan/emoji-speller"
      },
      {
        name: "Virtual Monkeys",
        pic: "/images/virtual_monkeys_ogp.png",
        description: "A javascript app which guesses random letters until it finds your original input text",
        url: "https://willpaulryan.github.io/virtual-monkeys/",
        github: "https://github.com/WillPaulRyan/virtual-monkeys"
      },
      {
        name: "React Flashcards",
        pic: "/images/flashcards_ogp.png",
        description: "A flashcards app, built in React",
        url: "https://willpaulryan.github.io/flashcards/",
        github: "https://github.com/WillPaulRyan/flashcards"
      }
    ];

    const projects = array.map((project, i) => {
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
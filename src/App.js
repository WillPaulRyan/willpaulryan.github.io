import React from 'react';
import Buttons from './components/Buttons';
import Profile from './components/Profile';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'home',
    };
  }

  handleClick = (event) => {
    if (event.target.id) {
      this.setState({
        display: event.target.id
      });
    }
    else if (event.target.parentNode.id) {
      this.setState({
        display: event.target.parentNode.id
      });
    }
    else {
      this.setState({
        display: event.target.parentNode.parentNode.id
      });
    }
  }

  render() {
    if (this.state.display === 'about') {
      return (
        <div id="app">
          <Buttons handleClick={this.handleClick.bind(this)} active={this.state.display} />
          <div id="content">
            <Profile />
            <div className="section">
              <About />
            </div>
          </div>
        </div>
      )
    }
    else if (this.state.display === 'projects') {
      return (
        <div id="app">
          <Buttons handleClick={this.handleClick.bind(this)} active={this.state.display} />
          <div id="content">
            <Profile />
            <div className="section">
              <Projects />
            </div>
          </div>
        </div>
      )
    }
    else if (this.state.display === 'contact') {
      return (
        <div id="app">
          <Buttons handleClick={this.handleClick.bind(this)} active={this.state.display} />
          <div id="content">
            <Profile />
            <div className="section">
              <Contact />
            </div>
          </div>
        </div>
      )
    }
    else {
      return (
        <div>
          <div id="app">
            <Buttons handleClick={this.handleClick.bind(this)} active={this.state.display} />
            <div id="content">
              <Profile />
            </div>
          </div>
        </div>
      );
    }
  }

  // Project Image Pre-load
  componentDidMount() {
    var images = ["/images/tommy_ogp.png", 
                  "/images/wr3_ogp.png", 
                  "/images/2020_ogp.png",
                  "/images/emoji_speller_ogp.png",
                  "/images/virtual_monkeys_ogp.png",
                  "/images/flashcards_ogp.png"];
    for (let i = 0; i < images.length; i++) {
      (new Image()).src = images[i];
    }
  };
}

export default App;

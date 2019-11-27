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
    else {
      this.setState({
        display: event.target.parentNode.id
      });
    }
  }

  render() {
    if (this.state.display === 'about') {
      return (
        <div id="app">
          <Buttons handleClick={this.handleClick.bind(this)} />
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
          <Buttons handleClick={this.handleClick.bind(this)} />
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
          <Buttons handleClick={this.handleClick.bind(this)} />
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
        <div id="app">
          <Buttons handleClick={this.handleClick.bind(this)} />
          <div id="content">
            <Profile />
          </div>
        </div>
      );
    }
  }
}

export default App;

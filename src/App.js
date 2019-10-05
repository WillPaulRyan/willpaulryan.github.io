import React from 'react';
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
        <div id="content">
          <div id="buttons">
            <button onClick={this.handleClick} id='home'><i className="fas fa-home"></i></button>
            <button onClick={this.handleClick} id='about'><i className="far fa-address-card"></i></button>
            <button onClick={this.handleClick} id='projects'><i className="fas fa-hamsa"></i></button>
            <button onClick={this.handleClick} id='contact'><i className="fas fa-at"></i></button>
          </div>

          <Profile />
          <div className="section">
            <About />
          </div>
        </div>
      )
    }
    else if (this.state.display === 'projects') {
      return (
        <div id="content">
          <div id="buttons">
            <button onClick={this.handleClick} id='home'><i className="fas fa-home"></i></button>
            <button onClick={this.handleClick} id='about'><i className="far fa-address-card"></i></button>
            <button onClick={this.handleClick} id='projects'><i className="fas fa-hamsa"></i></button>
            <button onClick={this.handleClick} id='contact'><i className="fas fa-at"></i></button>
          </div>

          <Profile />
          <div className="section">
            <Projects />
          </div>
        </div>
      )
    }
    else if (this.state.display === 'contact') {
      return (
        <div id="content">
          <div id="buttons">
            <button onClick={this.handleClick} id='home'><i className="fas fa-home"></i></button>
            <button onClick={this.handleClick} id='about'><i className="far fa-address-card"></i></button>
            <button onClick={this.handleClick} id='projects'><i className="fas fa-hamsa"></i></button>
            <button onClick={this.handleClick} id='contact'><i className="fas fa-at"></i></button>
          </div>

          <Profile />
          <div className="section">
            <Contact />
          </div>
        </div>
      )
    }
    else {
      return (
        <div id="content">
          <div id="buttons">
            <button onClick={this.handleClick} id='home'><i className="fas fa-home"></i></button>
            <button onClick={this.handleClick} id='about'><i className="far fa-address-card"></i></button>
            <button onClick={this.handleClick} id='projects'><i className="fas fa-hamsa"></i></button>
            <button onClick={this.handleClick} id='contact'><i className="fas fa-at"></i></button>

          </div>
          <Profile />
          <div className="section" style={{width: 0, border: 'none'}}></div>
        </div>
      );
    }
  }
}

export default App;

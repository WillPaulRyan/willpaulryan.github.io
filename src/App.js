import React from 'react';
import Profile from './components/Profile';
import About from './components/About';
import Projects from './components/Projects';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'home',
    };
  }

  handleClick = (event) => {
    this.setState({
      display: event.target.parentNode.id
    });
    console.log(event.target.parentNode.id);
  }

  render() {
    if (this.state.display === 'about') {
      return (
        <div id="content">
          <div id="buttons">
            <button onClick={this.handleClick} id='home'><i className="fas fa-home"></i></button>
            <button onClick={this.handleClick} id='about'><i className="far fa-address-card"></i></button>
            <button onClick={this.handleClick} id='projects'><i className="fas fa-hamsa"></i></button>
          </div>

          <Profile />
          <div id="section">
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
          </div>

          <Profile />
          <div id="section">
            <Projects />
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
          </div>
          <Profile />
          <div id="section" style={{width: 0, border: 'none'}}></div>
        </div>
      );
    }
  }
}

export default App;

import React from 'react';
import Profile from './components/Profile';
import About from './components/About';
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
      display: event.target.id,
    });
  }

  render() {
    if (this.state.display == 'home') {
      return (
        <div id="content">
          <div id="buttons">
            <button onClick={this.handleClick} id="home">Home</button>
            <button onClick={this.handleClick} id="about">About</button>
          </div>
          <Profile />
          <div id="section" style={{width: 0, border: 'none'}}></div>
        </div>
      );
    }
    else if (this.state.display == 'about') {
      return (
        <div id="content">
          <div id="buttons">
            <button onClick={this.handleClick} id="home">Home</button>
            <button onClick={this.handleClick} id="about">About</button>
          </div>

          <Profile />
          <div id="section">
            <About />
          </div>
        </div>
      )
    }
  }
}

export default App;

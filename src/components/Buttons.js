import React from 'react';
import './Buttons.css';

class Buttons extends React.Component {
  render () {
    return (
      <div id="buttons">
        <button title="Home" className={this.props.active !== "about" && this.props.active !== "projects" && this.props.active !== "contact" ? 'active' : ''} onClick={this.props.handleClick} id='home'>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 26 28"><path d="M22 15.5v7.5c0 0.5-0.5 1-1 1h-6v-6h-4v6h-6c-0.5 0-1-0.5-1-1v-7.5c0 0 0-0.1 0-0.1l9-7.4 9 7.4c0 0 0 0.1 0 0.1zM25.5 14.4l-1 1.2c-0.1 0.1-0.2 0.2-0.3 0.2h0c-0.1 0-0.2 0-0.3-0.1l-10.8-9-10.8 9c-0.1 0.1-0.2 0.1-0.4 0.1-0.1 0-0.2-0.1-0.3-0.2l-1-1.2c-0.2-0.2-0.1-0.5 0.1-0.7l11.2-9.4c0.7-0.5 1.7-0.5 2.4 0l3.8 3.2v-3c0-0.3 0.2-0.5 0.5-0.5h3c0.3 0 0.5 0.2 0.5 0.5v6.4l3.4 2.8c0.2 0.2 0.2 0.5 0.1 0.7z"/></svg>
        </button>
        <button title="About Me" className={this.props.active === "about" ? 'active' : ''} onClick={this.props.handleClick} id='about'>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M27 0h-24c-1.6 0-3 1.4-3 3v26c0 1.7 1.4 3 3 3h24c1.7 0 3-1.3 3-3v-26c0-1.6-1.3-3-3-3zM26 28h-22v-24h22v24zM8 18h14v2h-14zM8 22h14v2h-14zM10 9c0-1.7 1.3-3 3-3s3 1.3 3 3c0 1.7-1.3 3-3 3s-3-1.3-3-3zM15 12h-4c-1.6 0-3 0.9-3 2v2h10v-2c0-1.1-1.3-2-3-2z"/></svg>
        </button>
        <button title="Past Projects" className={this.props.active === "projects" ? 'active' : ''} onClick={this.props.handleClick} id='projects'>
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="32" viewBox="0 0 40 32"><path d="M26 23l3 3 10-10-10-10-3 3 7 7z"/><path d="M14 9l-3-3-10 10 10 10 3-3-7-7z"/><path d="M21.9 4.7l2.2 0.6-6 22-2.2-0.6 6-22z"/></svg>
        </button>
        <button title="Get In Touch" className={this.props.active === "contact" ? 'active' : ''} onClick={this.props.handleClick} id='contact'>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 28"><path d="M15.2 12.1c0-2.2-1.2-3.6-3.1-3.6-2.6 0-5.4 2.6-5.4 6.8 0 2.3 1.2 3.7 3.2 3.7 3.1 0 5.3-3.6 5.3-6.8zM24 14c0 4.9-3.5 6.7-6.4 6.8-0.2 0-0.3 0-0.5 0-1 0-1.7-0.3-2.2-0.8-0.3-0.3-0.5-0.8-0.5-1.3-1 1.2-2.7 2.4-4.8 2.4-3.4 0-5.3-2.1-5.3-5.7 0-5 3.5-9 7.7-9 1.8 0 3.3 0.8 4.1 2.1l0-0.3 0.2-0.9c0-0.1 0.1-0.3 0.2-0.3h1.8c0.1 0 0.2 0.1 0.2 0.2 0 0 0.1 0.2 0 0.3l-1.9 9.6c-0.1 0.3-0.1 0.5-0.1 0.8 0 0.8 0.3 1 0.9 1 1.1 0 4.5-0.5 4.5-4.8 0-6.1-3.9-10-10-10-5.5 0-10 4.5-10 10s4.5 10 10 10c2.3 0 4.5-0.8 6.3-2.2 0.2-0.2 0.5-0.2 0.7 0.1l0.6 0.8c0.1 0.1 0.1 0.2 0.1 0.4 0 0.1-0.1 0.3-0.2 0.3-2.1 1.7-4.8 2.7-7.6 2.7-6.6 0-12-5.4-12-12s5.4-12 12-12c7.2 0 12 4.8 12 12z"/></svg>
        </button>
      </div>
    )
  }
}

export default Buttons;
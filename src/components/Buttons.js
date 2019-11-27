import React from 'react';
import './Buttons.css';

class Buttons extends React.Component {
  render () {
    return (
      <div id="buttons">
        <button onClick={this.props.handleClick} id='home'><i className="fas fa-home"></i></button>
        <button onClick={this.props.handleClick} id='about'><i className="far fa-address-card"></i></button>
        <button onClick={this.props.handleClick} id='projects'><i className="fas fa-hamsa"></i></button>
        <button onClick={this.props.handleClick} id='contact'><i className="fas fa-at"></i></button>
      </div>
    )
  }
}

export default Buttons;
import React from "react";
import "./Card.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      translateX: 0,
      translateY: 0,
      centerX: null,
      centerY: null
    };

    this.imgRef = React.createRef();
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  componentDidMount() {
    this.setState({
      centerX: this.imgRef.current.clientWidth / 2,
      centerY: this.imgRef.current.clientHeight / 2
    });
  }

  handleMouseMove(e) {
    if (e.target !== e.currentTarget) return;

    this.setState({
      translateX: `${(-e.nativeEvent.offsetX + this.state.centerX) / 10}px`,
      translateY: `${(-e.nativeEvent.offsetY + this.state.centerY) / 10}px`
    });
  }

  render() {
    const bgPosition = {
      transform: `scale(1.2) translate(${this.state.translateX}, ${this.state.translateY})`
    };

    return (
      <div className="project">
        <img
          ref={this.imgRef}
          style={bgPosition}
          onMouseMove={this.handleMouseMove}
          src={this.props.pic}
          alt={this.props.name}
        />
        <h4 className="name project-text">{this.props.name}</h4>
        <p className="description project-text">{this.props.description}</p>
        <a
          href={this.props.url}
          className="url project-text"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Site
        </a>
        <a
          href={this.props.github}
          className="github project-text"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
    );
  }
}

export default Card;

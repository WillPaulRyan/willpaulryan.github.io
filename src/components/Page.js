import React from "react";
import Buttons from "./Buttons";
import Profile from "./Profile";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import {ProjectList} from './ProjectList';
import "./Page.css";

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "home"
    };
  }

  handleClick = event => {
    if (event.target.id) {
      this.setState({
        display: event.target.id
      });
    } else if (event.target.parentNode.id) {
      this.setState({
        display: event.target.parentNode.id
      });
    } else {
      this.setState({
        display: event.target.parentNode.parentNode.id
      });
    }
  };

  renderSwitch(display) {
    switch (display) {
      case "about":
        return (
          <div className="section">
            <About />
          </div>
        );
      case "projects":
        return (
          <div className="section">
            <Projects />
          </div>
        );
      case "contact":
        return (
          <div className="section">
            <Contact />
          </div>
        );
      default:
        return null;
    }
  }

  render() {
    return (
      <div id="page">
        <Buttons
          handleClick={this.handleClick.bind(this)}
          active={this.state.display}
        />
        <div id="content">
          <Profile />
          {this.renderSwitch(this.state.display)}
        </div>
      </div>
    );
  }

  // Project Image Pre-load
  componentDidMount() {
    for (let i = 0; i < ProjectList.length; i++) {
      new Image().src = ProjectList[i].pic;
    }
  }
}

export default Page;

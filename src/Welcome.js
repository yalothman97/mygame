import React, { Component } from "react";
import logo from "./logo.jpg";
// import App from "./App";

class Welcome extends Component {
  state = {
    play: false
  };
  toggle = () => {
    this.setState({
      play: !this.state.play
    });
  };

  render() {
    console.log(this.props.handleScreen);
    return (
      <div className="mx-auto text-center">
        <img src={logo} alt="logo" />
        <h3>
          Press <strong>Start</strong> to play the piano
        </h3>
        <button
          onClick={() => this.props.handleScreen("game")}
          className="btn btn-primary"
        >
          Start
        </button>
      </div>
    );
  }
}

export default Welcome;

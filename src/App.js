import React, { Component } from "react";
import Welcome from "./Welcome";
import Game from "./Game";

class App extends Component {
  state = {
    status: "welcome"
  };

  handleScreen = screen => this.setState({ status: screen });
  render() {
    if (this.state.status === "welcome") {
      return <Welcome handleScreen={this.handleScreen} />;
    }
    return <Game />;
  }
}

export default App;

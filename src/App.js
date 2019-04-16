import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  componentDidMount() {
    fetch("/hello")
      .then(res => res.text())
      .then(data => {
        this.setState({
          text: data
        });
      });
  }

  render() {
    return <div>{this.state.text}</div>;
  }
}

export default App;

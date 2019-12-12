import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import HogList from "./HogList";
import hogs from "../porkers_data";

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      hogs: { hogs }
    }
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <HogList hogsData={this.state.hogs} />
      </div>
    );
  }
}

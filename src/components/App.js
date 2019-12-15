import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import HogList from "./HogList";
import hogs from "../porkers_data";

export default class App extends Component {
  state = {
    filtered: false
  };

  setFiltered = () => {
    this.setState({
      filtered: !this.state.filtered
    })
  };

  filteredHog = () => {
    const newHogs = [...hogs]
    if (this.state.filtered) {
      return newHogs.filter(hog => hog.greased)
    }
    return newHogs
  }

  render() {
    return (
      <div className="App">
        <Nav setFiltered={this.setFiltered}/>
        <HogList hogs={this.filteredHog()} />
      </div>
    );
  }
}

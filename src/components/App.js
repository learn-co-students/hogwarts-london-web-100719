import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import HogList from "./HogList";
import hogs from "../porkers_data";

export default class App extends Component {
  state = {
    filtered: false,
    sorted: null
  };

  setFiltered = () => {
    this.setState({
      filtered: !this.state.filtered
    });
  };

  setSorted = (option) => {
    this.setState({
      sorted: option
    });
  };

  filteredHogs = () => {
    const newHogs = [...hogs];
    if (this.state.filtered) {
      return newHogs.filter(hog => hog.greased);
    }
    return newHogs;
  };

  sortedHogs = () => {
    const newHogs = [...this.filteredHogs()];
    const { sorted } = this.state;
    if (sorted === "name")
      return newHogs.sort((a, b) => a.name.localeCompare(b.name));
    return newHogs;
  };

  render() {
    return (
      <div className="App">
        <Nav setFiltered={this.setFiltered} setSorted={this.setSorted} />
        <HogList hogs={this.sortedHogs()} />
      </div>
    );
  }
}

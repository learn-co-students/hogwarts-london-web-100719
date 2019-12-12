import React, { Component } from "react";
import HogCard from "./HogCard";
import FilterMenu from "./FilterMenu";

class HogsContainer extends Component {
  constructor(props) {
    super(props);
    let init = {
      hogs: this.props.hogs,
      selectedHogs: this.props.hogs
    };
    this.state = init;
  }

  hideHog = name => {
    let hogs = this.state.hogs;
    let selectedHogs = this.state.selectedHogs;
    hogs = hogs.filter(hog => hog.name !== name);
    selectedHogs = selectedHogs.filter(hog => hog.name !== name);
    this.setState({ hogs: hogs, selectedHogs: selectedHogs });
  };

  sortByName = () => {
    let hogs = this.state.hogs;
    hogs.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({ selectedHogs: hogs });
  };

  sortByWeight = () => {
    let hogs = this.state.hogs;
    hogs.sort((a, b) => a.weight - b.weight);
    this.setState({ selectedHogs: hogs });
  };

  filterForGreased = () => {
    let hogs = this.state.hogs;
    hogs = hogs.filter(hog => hog.greased === true);
    this.setState({ selectedHogs: hogs });
  };

  render() {
    return (
      <div className="ui grid container">
        <FilterMenu
          sortByName={this.sortByName}
          sortByWeight={this.sortByWeight}
          filterForGreased={this.filterForGreased}
        />
        {this.state.selectedHogs.map(hog => {
          return <HogCard hog={hog} key={hog.name} hideHog={this.hideHog} />;
        })}
      </div>
    );
  }
}

export default HogsContainer;

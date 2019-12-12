import React, { Component } from "react";
import HogCard from "./HogCard";
import FilterMenu from "./FilterMenu";

class HogsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hogs: this.props.hogs,
      selectedHogs: this.props.hogs
    };
  }

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
          return <HogCard hog={hog} />;
        })}
      </div>
    );
  }
}

export default HogsContainer;

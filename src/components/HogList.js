import React, { Component } from "react";
import HogTile from "./HogTile";

export default class HogList extends Component {
  generateHogTiles = () => {
    return this.props.hogsData.hogs.map((hog, index) => (
      <HogTile
        key={index}
        name={hog.name}
        specialty={hog.specialty}
        greased={hog.greased}
        weight={hog.weight}
        medal={hog["highest medal achieved"]}
      />
    ));
  };

  render() {
    return (
      <div id="hog-list">{this.generateHogTiles()}</div>
    );
  }
}

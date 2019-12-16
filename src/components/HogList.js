import React, { Component } from "react";
import HogTile from "./HogTile";

export default class HogList extends Component {
  render() {
    return (
      <div className="ui cards">
        {this.props.hogs.map((hog, index) => (
          <HogTile key={index} hog={hog} hideHog={this.props.hideHog} />
        ))}
      </div>
    );
  }
}

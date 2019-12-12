import React, { Component } from "react";

export class PigTileBack extends Component {
  render() {
    return (
      <div className="pigTile-Back">
        <p>{this.props.hog.weight}</p>
      </div>
    );
  }
}

export default PigTileBack;

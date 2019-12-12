import React, { Component } from "react";

export class PigTileFront extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="pigTile">
        <div class="image">
          <img src={this.props.hog.img} />
        </div>
        <div class="content">
          <h3 class="header">{this.props.hog.name}</h3>
        </div>
      </div>
    );
  }
}

export default PigTileFront;

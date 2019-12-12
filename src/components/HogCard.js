import React, { Component } from "react";
import PigTileFront from "./PigTileFront";
import PigTileBack from "./PigTileBack";

export class HogCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ui eight wide column">
        {/* <PigTileFront hog={this.props.hog} /> */}
        {/* <PigTileBack hog={this.props.hog} /> */}
        <div className="pigTile">
          <div class="image">
            <img src={this.props.hog.img} />
          </div>
          <div class="content">
            <h3 class="header">
              {this.props.hog.name} - {this.props.hog.weight}
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default HogCard;

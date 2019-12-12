import React from "react";
import Hog from "./Hog";

export default class HogsList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="ui grid container">
        {this.props.hogs.map(h => (
          <Hog hog={h} />
        ))}
      </div>
    );
  }
}

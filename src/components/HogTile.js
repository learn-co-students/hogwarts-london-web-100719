import React, { Component } from "react";

export default class HogTile extends Component {
  render() {
    return (
      <div className="pigTile">
        <h3>{this.props.name}</h3>
        <p>Specialty: {this.props.specialty}</p>
        <p>Weight: {this.props.weight}</p>
        <p>Top medal: {this.props.medal}</p>
      </div>
    );
  }
}

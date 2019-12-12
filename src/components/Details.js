import React from "react";

export default class Details extends React.Component {
  render() {
    return (
      <div>
        <p>Specialty: {this.props.specialty}</p>
        <p>Greased: {this.props.greased ? "Yes" : "No"}</p>
        <p>Weight: {this.props.weight}</p>
        <p>Highest Medal Achieved: {this.props.medal}</p>
      </div>
    );
  }
}

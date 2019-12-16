import React, { Component } from "react";

export default class HogTile extends Component {
  state = {
    clicked: false
  };

  srcName = () => {
    return this.props.hog.name
      .split(" ")
      .join("_")
      .toLowerCase();
  };

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    });
  };

  showHogDetails = hog => {
    if (this.state.clicked) {
      return (
        <div className="meta">
          Specialty: {hog.specialty}
          <br />
          Greased: {hog.greased.toString()}
          <br />
          Weight: {hog.weight}
          <br />
          Top medal: {hog["highest medal achieved"]}
        </div>
      );
    }
  };

  render() {
    const { hog } = this.props;

    return (
      <div className="ui card" onClick={this.handleClick}>
        <div className="image">
          <img src={`./hog-imgs/${this.srcName()}.jpg`} alt="hogPic" />
        </div>
        <div className="content">
          <div className="header">{hog.name}</div>
          {this.showHogDetails(hog)}
        </div>
        <div className="extra content">
          <button onClick={() => this.props.hideHog(hog.name)}>Hide Me</button>
        </div>
      </div>
    );
  }
}

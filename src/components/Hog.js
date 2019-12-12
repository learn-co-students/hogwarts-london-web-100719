import React from "react";
import Details from "./Details";

export default class Hog extends React.Component {
  constructor() {
    super();
    this.state = {
      isClicked: false
    };
  }

  getImgPath = hog => {
    let name = hog.name;
    let newName = name.split("");

    let pathEndpoint = newName
      .map(char => (char === " " ? "_" : char.toLowerCase()))
      .join("");
    return pathEndpoint;
  };

  handleClick = () => {
    this.setState(ps => {
      return {
        isClicked: !ps.isClicked
      };
    });
  };

  render() {
    const { name, specialty, greased, weight } = this.props.hog;
    const medal = this.props.hog["highest medal achieved"];
    return (
      <div className="ui eight wide column">
        <div onClick={this.handleClick} className="ui card">
          <div className="image">
            <img
              src={"./hog-imgs/" + this.getImgPath(this.props.hog) + ".jpg"}
            />
          </div>
          <div className="content">
            <h1 className="header">{name}</h1>
            <div className="description">
              {this.state.isClicked ? (
                <Details
                  specialty={specialty}
                  greased={greased}
                  weight={weight}
                  medal={medal}
                />
              ) : null}
            </div>
          </div>
        </div>
        {/* <button /> */}
      </div>
    );
  }
}

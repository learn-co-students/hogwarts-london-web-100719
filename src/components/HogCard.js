import React, { Component } from "react";

export class HogCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false
    };
  }

  handleClick = () => {
    let current = this.state.showDetails;
    this.setState({ showDetails: !current });
  };

  render() {
    return (
      <div className="ui eight wide column">
        <div className="pigTile">
          <div class="image">
            <img src={this.props.hog.img} onClick={this.handleClick} />
          </div>
          <div class="content">
            <h3 class="header">
              {this.props.hog.name} - {this.props.hog.weight}kg
            </h3>
            {this.state.showDetails ? (
              <div>
                <h5>Specialty: {this.props.hog.specialty}</h5>
                <h5>
                  Highest Medal Achieved:{" "}
                  {this.props.hog["highest medal achieved"]}
                </h5>
                <h5>Greased? {`${this.props.hog.greased}`}</h5>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default HogCard;

import React from "react";

export default class ToggleHogs extends React.Component {
  constructor() {
    super();
  }

  handleCheckbox = event => {
    this.props.setTogglers(event.target.id);
  };

  render() {
    return (
      <div>
        <div className="ui toggle checkbox">
          <input
            onChange={this.handleCheckbox}
            id="greased"
            name="greased"
            type="checkbox"
          />
          <label>Filter by greased </label>
        </div>
        <br></br>
        <div
          className={`ui ${
            this.props.weightStatus ? "disabled" : null
          } toggle checkbox`}
        >
          <input
            onChange={this.handleCheckbox}
            disabled={this.props.weightStatus ? true : null}
            id="name"
            name="name"
            type="checkbox"
          />
          <label>Sort by name </label>
        </div>
        <br></br>
        <div
          className={`ui ${
            this.props.nameStatus ? "disabled" : null
          } toggle checkbox`}
        >
          <input
            onChange={this.handleCheckbox}
            disabled={this.props.nameStatus ? true : null}
            id="weight"
            name="weight"
            type="checkbox"
          />
          <label>Sort by weight </label>
        </div>
      </div>
    );
  }
}

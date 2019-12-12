import React, { Component } from "react";

export class FilterMenu extends Component {
  render() {
    return (
      <div className="ui eight wide column">
        {/* <div class="ui selection dropdown">
          <input type="hidden" name="Sort" />
          <i class="dropdown icon"></i>
          <div class="default text">Sort</div>
          <div class="menu">
            <div class="item" data-value="1">
              By Name
            </div>
            <div class="item" data-value="0">
              By Weight
            </div>
          </div>
        </div> */}
        <br />
        <br />
        <button onClick={this.props.sortByName} className="ui button">
          {" "}
          Sort By Name
        </button>
        <br />
        <br />
        <br />
        <br />
        <button onClick={this.props.sortByWeight} className="ui button">
          Sort By Weight
        </button>
        <br />
        <br />
        <br />
        <br />
        <button onClick={this.props.filterForGreased} className="ui button">
          Filter For Greased Hogs
        </button>
      </div>
    );
  }
}

export default FilterMenu;

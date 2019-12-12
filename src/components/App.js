import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogsList from "./HogsList";
import ToggleHogs from "./ToggleHogs";
import { sortBy } from "../helpers";

const byNameAsc = sortBy("name");
const byWeightDesc = sortBy("weight", "desc");

class App extends Component {
  constructor() {
    super();
    this.state = {
      greased: false,
      name: false,
      weight: false
    };
  }

  greasedFilter = hogs => {
    return hogs.filter(hog => hog.greased === true);
  };

  get filteredAndSortedHogs() {
    let checkedHogs = [...hogs];
    const { greased, weight, name } = this.state;
    if (greased) {
      checkedHogs = this.greasedFilter(checkedHogs);
      console.log(checkedHogs);
    }
    if (weight) {
      //disable button
      checkedHogs = checkedHogs.sort(byWeightDesc);
    }
    if (name) {
      //disable button
      checkedHogs = checkedHogs.sort(byNameAsc);
    }
    console.log(checkedHogs);
    return checkedHogs;
  }

  setTogglers = attr => {
    this.setState({ [attr]: !this.state[attr] });
  };

  render() {
    const { setTogglers, filteredAndSortedHogs } = this;
    const { name, weight } = this.state;
    return (
      <div className="App">
        <Nav />
        <ToggleHogs
          setTogglers={setTogglers}
          nameStatus={name}
          weightStatus={weight}
        />
        <br></br>
        <HogsList hogs={filteredAndSortedHogs} />
      </div>
    );
  }
}

export default App;

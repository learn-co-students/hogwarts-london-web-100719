import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import TilesContainer from './TilesContainer';

class App extends Component {
  state = {
    filtered: false,
    sorted: null,
    hidden: []
  };

  setFiltered = () => {
    this.setState({filtered: !this.state.filtered});
  };

  setSorted = option => {
    this.setState({ sorted: option});
  };

  hideHog = () => {
    this.setState({hidden: [...this.state.hidden, name]});
  }
  hiddenHogs = () => {
    const newHogs = [...hogs];
    const {hidden} = this.state;
    if (hidden.length) return newHogs.filter(hog => !hidden.includes(hog.name));
    return newHogs;
  }
  filteredHogs = () => {
    const newHogs = [...this.hiddenHogs()];
    if (this.state.filtered) return newHogs.filter(hog => hog.greased);
    return newHogs;
  }
  sortedHogs = () => {
    const newHogs = [...this.filteredHogs()];
    const { sorted } = this.state;
    if (sorted === "name")
    return newHogs.sort((a,b) => a.name.localeCompare(b.name));
    if (sorted === "weight") 
    return newHogs.sort((a,b) => a.weight - b.weight);
    return newHogs;
  }


  render() {
    return (
      <div className="App">
          < Nav setFiltered={this.setFiltered} />
          <TilesContainer hogs={this.sortedHogs()} hideHog={this.hideHog} />

      </div>
    )
  }
}

export default App;

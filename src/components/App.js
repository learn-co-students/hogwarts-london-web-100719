import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogsList from './HogsList';
import FilterBar from './FilterBar';


export default class App extends Component {

  state = {
    filterGreased: "all",
    sortBy: null
  }

  filterGreasedHogs = (event) => {

    this.setState({
      filterGreased: event.target.value
    })
  }

  filterHogs = () => {

    if (this.state.filterGreased == "greased"){
      return hogs.filter( hog => hog.greased === true) 
      
    } else {
      return hogs.filter( hog => hog.greased === false)
    }
  
  }

  sortedBy = (event) => {
    hogs.sortBy()
  }
  

  render() {
    return (
      <div className="App">
          < Nav />
          < FilterBar filterGreasedHogs = {this.filterGreasedHogs} sortBy = {this.sortBy}/>
          < HogsList hogs = {this.state.filterGreased === "all" ? hogs : this.filterHogs() } />
      </div>
    )
  }
}


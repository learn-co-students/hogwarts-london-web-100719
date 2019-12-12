import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogsList from './HogsList';


export default class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />
          < HogsList hogs = {hogs} />
      </div>
    )
  }
}


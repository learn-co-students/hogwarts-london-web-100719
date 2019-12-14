import React, { Component } from 'react';
import Tile from './Tile';
import hogs from '../porkers_data';

class TilesContainer extends Component {
    render() {
        return (
            <div className="ui cards">
                {this.props.hogs.map(hog => (
                <Tile hog={hog} hideHog={this.props.hideHog}/>))}
            </div>
        );
    }
}

export default TilesContainer;

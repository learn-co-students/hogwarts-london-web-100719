import React, { Component } from 'react';

class Tile extends Component {
    state ={
        clicked: false
    };
    srcName = () => {
        return this.props.hog.name.split(" ").join("_").toLowerCase();
    };
    render() {
        const medal = this.props.hog['highest medal achieved'];
        const {name, specialty, greased, weight} = this.props.hog;
        return (
            <div className="ui card">
                <div className="image" 
                onClick={() => this.setState({clicked: !this.state.clicked})}>

                    <img src={`./hog-imgs/${this.srcName()}.jpg`} />
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    {this.state.clicked && (
                        <div className="meta">
                            Specitalty: {specialty}
                            <br />
                            Greased: {!!greased}
                            <br />
                            Weight: {weight}
                            <br />
                            Medal: {medal}
                        </div>
                    )}
                </div>
                <div className="extra content">
                    <button onClick={() => this.props.hideHog(name)}>Hide Me </button>
                </div>
            </div>
        );
    }
}

export default Tile;

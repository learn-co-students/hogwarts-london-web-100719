import React, { Component } from 'react';

export default class HogsDescription extends Component {

    render(){
        let {greased, specialty, weight} = this.props.hog
        return( 
            <div>
                <p>Specialty: {specialty}</p>
                <p>Weight: {weight}</p>
                <p>Highest Medal: {this.props.hog["highest medal achieved"]}</p>
                <p>Greased: {greased ? "yes" : "no"}</p>
            </div>
        )
    }
}
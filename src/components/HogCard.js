import React, { Component } from 'react';

export class HogCard extends Component {

	render() {

		const {name, specialty, greased, weight} = this.props.details

		return (

			<div className="ui card">
				<div className="image">
					<img src={this.props.details.imgUrl} alt="pig"/>
				</div>
				<div className="content">
					<a className="header">{name}</a>
					<div className="meta">{specialty}</div>
					<div className="description">
						Greased: {greased ? 'yas' : 'no'}<br/>
						Weight: {weight} tons
					</div>
				</div>
				<div className="extra content">
					<a>
						<i className="secret icon"></i>
						Medal: {this.props.details['highest medal achieved']}
					</a>
				</div>
				
			</div>

		);

	}

}

export default HogCard;

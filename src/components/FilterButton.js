import React, { Component } from 'react';

export default class FilterButton extends Component {

	render() {

		return (

			<div>

				<button onClick={this.props.handleFilterToggle}>
					{this.props.filterGreased ? 'Show Greased Hawgs' :
					'Hide Greased Hawgs'}
				</button>

			</div>

		);

	}

}

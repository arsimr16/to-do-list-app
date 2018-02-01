import React, { Component } from 'react';
import './ListItem.css';

class ListItem extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="ListItem">
				{this.props.item}
			</div>
		);
	}
}

export default ListItem;
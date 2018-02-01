import React, { Component } from 'react';
import './ListItem.css';

class ListItem extends Component {
	constructor(props) {
		super(props);
		this.removeItem = this.removeItem.bind(this);
	}

	removeItem() {
		this.props.removeItem(this.props.item);
	}

	render() {
		return (
			<div className="ListItem">
				<input id="checkBox" type="checkbox"/>
				&nbsp;&nbsp;
				{this.props.item}
				&nbsp;&nbsp;
				<button onClick={this.removeItem}>remove</button>
			</div>
		);
	}
}

export default ListItem;
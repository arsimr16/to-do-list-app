import React, { Component } from 'react';
import './AddItem.css';

class AddItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			item: ''
		}
		this.handleUpdate = this.handleUpdate.bind(this);
		this.addNewItem = this.addNewItem.bind(this);
	}

	handleUpdate(event) {
		this.setState({item: event.target.value});
	}

	addNewItem() {
		this.props.addNewItem(this.state.item);
		this.setState({item: ''});
	}

	render() {
		return (
			<div className="AddItem">
				<input 
					type="text" 
					onChange={this.handleUpdate}
					value={this.state.item}
				/>
				&nbsp;&nbsp;
				<button onClick={this.addNewItem}>Add</button>
			</div>
		);
	}
}

export default AddItem;
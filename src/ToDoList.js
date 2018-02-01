import React, { Component } from 'react';
import './ToDoList.css';
import AddItem from './AddItem.js';
import ListItem from './ListItem.js';

class ToDoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: ['take shower', 'do laundry', 'make dinner']
		}
		this.addNewItem = this.addNewItem.bind(this);
		this.renderList = this.renderList.bind(this);
	}

	renderList() {
		return this.state.items.map(item => (
			<ListItem key={item} item={item}/>
		));
	}

	addNewItem(newItem) {
		this.setState({items: [...this.state.items, newItem]});
	}

	render() {
		return (
			<div className="ToDoList">
				To do List
				<AddItem addNewItem={this.addNewItem}/>
				{this.renderList()}
			</div>
		);
	}
}

export default ToDoList;
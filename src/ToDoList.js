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
		this.renderList = this.renderList.bind(this);
		this.addNewItem = this.addNewItem.bind(this);
		this.removeItem = this.removeItem.bind(this);
	}

	renderList() {
		return this.state.items.map(item => (
			<ListItem 
				key={item} 
				item={item}
				removeItem={this.removeItem}
			/>
		));
	}

	addNewItem(newItem) {
		this.setState({items: [...this.state.items, newItem]});
	}

	removeItem(removeItem) {
		const filteredList = this.state.items.filter(item => {
			return item !== removeItem;
		});
		this.setState({items: filteredList});
	}

	render() {
		return (
			<div className="ToDoList">
				<h1>To do List</h1>
				<AddItem addNewItem={this.addNewItem}/>
				{this.renderList()}
			</div>
		);
	}
}

export default ToDoList;
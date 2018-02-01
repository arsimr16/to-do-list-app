import React, { Component } from 'react';
import './ToDoList.css';
import ListItem from './ListItem.js';

class ToDoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: ['take shower', 'do laundry', 'make dinner']
		}
		this.renderList = this.renderList.bind(this);
	}

	renderList() {
		return this.state.items.map(item => (
			<ListItem key={item} item={item}/>
		));
	}

	render() {
		return (
			<div className="ToDoList">
				To do List
				{this.renderList()}
			</div>
		);
	}
}

export default ToDoList;
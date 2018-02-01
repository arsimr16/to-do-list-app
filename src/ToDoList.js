import React, { Component } from 'react';
import './ToDoList.css';
import ListItem from './ListItem.js';

class ToDoList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="ToDoList">
				To do List
				<ListItem item="take shower"/>
				<ListItem item="do laundry"/>
				<ListItem item="make dinner"/>
			</div>
		);
	}
}

export default ToDoList;
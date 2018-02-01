import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem.js';

class App extends Component {
	constructor(props) {
		super(props);
	}
	
  render() {
    return (
      <div className="App">
        To Do List
        <ListItem item="take shower"/>
				<ListItem item="make dinner"/>
      </div>
    );
  }
}

export default App;

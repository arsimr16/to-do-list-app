import React, { Component } from 'react';
import './App.css';
import ToDoList from './ToDoList.js';

class App extends Component {
	constructor(props) {
		super(props);
	}

  render() {
    return (
      <div className="App">
        <ToDoList/>
      </div>
    );
  }
}

export default App;

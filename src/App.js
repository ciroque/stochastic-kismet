import React, { Component } from 'react';
import './App.css';
import List from "./components/list/List";

class App extends Component {
  render() {
    return (
      <div className="App">
        <List items={['one', 'two', 'three', 'four']}/>
      </div>
    );
  }
}

export default App;

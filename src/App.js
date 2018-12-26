import React, { Component } from 'react';
import './App.css';
import ListManager from "./components/listManager/ListManager";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <ListManager />
      </div>
    );
  }
}

export default App;

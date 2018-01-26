import React, { Component } from 'react';
import Nav from './Nav.js';
import Feed from './Feed.js';
import Sidebar from './Sidebar.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav />
      <main>
        <Feed />
        <Sidebar />
      </main>
      </div>
    );
  }
}

export default App;

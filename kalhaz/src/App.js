import React, { Component } from 'react';
import Dashboard from './components/Dashboard';
import Menu from './components/Menu';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Dashboard />
      </div>
    );
  }
}

export default App;

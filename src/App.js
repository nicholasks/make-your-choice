import React, { Component } from 'react';
import Header from './containers/Header/';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <header className="App-header">
        </header>
      </div>
    );
  }
}

export default App;

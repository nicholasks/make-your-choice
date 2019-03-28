import React, { Component } from 'react';
import Header from './containers/Header/';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <h1>Ugly Styles</h1>
        </div>
      </div>
    );
  }
}

export default App;

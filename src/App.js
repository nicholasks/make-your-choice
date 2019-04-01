import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Header from './containers/Header/';
import OverallTable from './components/OverallTable/';
import UserVoteTable from './components/UserVoteTable/';
import Vote from './components/Vote/';
import LoginForm from './components/LoginForm/';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <div>
          <Route path="/" exact component={OverallTable} />
          <Route path="/login" component={LoginForm} />
          <Route path="/createAccount" component={OverallTable} />
          <Route path="/uservotes" component={UserVoteTable} />
          <Route path="/vote" component={Vote} />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;

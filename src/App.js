import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Header from './containers/Header/';
import OverallTable from './components/OverallTable/';
import LoginForm from './components/LoginForm/';

import logo from './logo.svg';
import './App.css';


function Login() {
  return <h2><center>Login Page</center></h2>;
}
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <div>
          <Route path="/" exact component={OverallTable} />
          <Route path="/login" component={LoginForm} />
          <Route path="/createAccount" exact component={OverallTable} />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;

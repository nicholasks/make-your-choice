import React, { Component } from 'react';
import { Link } from "react-router-dom";

import styles from './styles';


class Header extends Component {
  render() {
    return(
      <div style={styles.divStyle}>
        <header style={styles.headerStyle}>
          <h1 style={{flex: 11}}>Make your Choice</h1>
          <Link
            to="/login/"
            style={styles.linkStyle}>
            Login
          </Link>
        </header>
        <div style={{display: 'flex', direction: 'row'}}>
          <Link
            to="/"
            style={styles.pStyle}>
            Live Status
          </Link>
          <Link
            to="/uservotes/"
            style={styles.pStyle}>
            Users Votes
          </Link>
          <Link
            to="/vote/"
            style={styles.pStyle}>
            Vote Now
          </Link>
        </div>
      </div>
    )
  }
}

export default Header;

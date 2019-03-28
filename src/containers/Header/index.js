import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return(
      <div style={divStyle}>
        <header style={headerStyle}>
          <h1 style={{flex: 11}}>Make your Choice</h1>
          <Link
            to="/login/"
            style={linkStyle}>
            Login
          </Link>
        </header>
        <div style={{display: 'flex', direction: 'row'}}>
          <Link
            to="/"
            style={pStyle}>
            Live Status
          </Link>
          <Link
            to="/vote/"
            style={pStyle}>
            Vote Now
          </Link>
        </div>
      </div>
    )
  }
}

const linkStyle = {
  color: 'currentColor',
  flex: 1,
  padding: '10px 2px',
  border: '1px solid #474d59',
  margin: '25px 5px',
  textDecoration: 'none',
}

const divStyle = {
  margin: '0px'
}

const headerStyle = {
  textAlign: 'center',
  display: 'flex',
  flexWrap: 'wrap',
  background: '#282c34',
  color: '#fff',
  padding: '10px',
  margin: '0px',
  fontFamily: 'Courier New'
}

const pStyle = {
  textAlign: 'center',
  flex: '1',
  color: '#fff',
  background: '#212630',
  border: '2px solid #4a515e',
  borderLeft: '0px'
}

export default Header;

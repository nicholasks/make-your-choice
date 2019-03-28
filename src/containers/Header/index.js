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
          <p style={pStyle}>Live Status</p>
          <p style={pStyle}>Vote now</p>
        </div>
      </div>
    )
  }
}

const linkStyle = {
  color: 'currentColor',
  flex: 1,
  padding: '10px 2px',
  border: '1px solid red',
  margin: '25px 5px',
  textDecoration: 'none',
  hoverBackground: '#666'
}

const divStyle = {
  border: '2px solid blue',
  margin: '0px'
}

const headerStyle = {
  textAlign: 'center',
  display: 'flex',
  background: '#282c34',
  color: '#fff',
  padding: '10px',
  margin: '0px',
  fontFamily: 'Courier New'
}

const pStyle = {
  textAlign: 'center',
  flex: '1',
  border: '1px solid red'
}

export default Header;

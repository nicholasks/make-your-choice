import React, { Component } from 'react';

class Header extends Component {
  render() {
    return(
      <div style={divStyle}>
        <header style={headerStyle}>
          <h1 style={{flex: 11}}>Make your Choice</h1>
          <p style={{flex: 1, padding: '15px'}}>Login</p>
        </header>
        <div style={{display: 'flex', direction: 'row'}}>
          <p style={pStyle}>Live Status</p>
          <p style={pStyle}>Vote now</p>
        </div>
      </div>
    )
  }
}

const divStyle = {
  border: '2px solid blue',
  margin: '0px'
}

const headerStyle = {
  display: 'flex',
  background: '#282c34',
  color: '#fff',
  padding: '10px',
  margin: '0px',
  fontFamily: 'Courier New'
}

const pStyle = {
  flex: '1',
  border: '1px solid red'
}

export default Header;

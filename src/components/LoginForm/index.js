import React, { Component } from 'react';


class LoginForm extends Component {
  render() {
    return(
      <React.Fragment>
        <h1><center>Login Ugly Form here</center></h1>
        <form className="formzinho" style={formStyle}>
          <div style={divStyle}>
            Name: <input type="textField"></input>
          </div>
          <div style={divStyle}>
            Username: <input type="textField"></input>
          </div>
          <div style={divStyle}>
            Password: <input type="password"></input>
          </div>
          <div style={divStyle}>
            Password confirmation:  <input type="password"></input>
          </div>
          <div style={divStyle}>
            <input type="button" value="Go or type ENTER"></input>
          </div>
        </form>
      </React.Fragment>
    )
  }
}

const divStyle = {
  margin: '10px 10%'
}

const formStyle = {
  display: 'flex',
  flexDirection: 'column'

}
const h1Style = {
  textAlign: 'center',
  color: 'grey'
}

export default LoginForm;

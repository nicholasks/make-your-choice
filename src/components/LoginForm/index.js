import React, { Component } from 'react';


class LoginForm extends Component {
  render() {
    return(
      <React.Fragment>
        <h1><center>Ugly Login Form Here</center></h1>

        <div className="formsz" style={{display: 'flex', flexWrap: 'wrap'}}>
          <form className="loginForm" style={formStyle}>
            <div style={formDivStyle}>
              <h1 style={{flex: '5', textAlign: 'center'}}>LOGIN</h1>
              <div style={divStyle}>
                Username: <input type="textField"></input>
              </div>
              <div style={divStyle}>
                Password: <input type="password"></input>
              </div>
              <div style={divStyle}>
                <input type="button" value="Login"></input>
              </div>
            </div>
          </form>

          <form className="createAccountForm" style={formStyle}>
            <div style={formDivStyle}>
              <h1 style={{flex: '5', textAlign: 'center'}}>CREATE ACCOUNT</h1>
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
                <input type="button" value="Create"></input>
              </div>
            </div>
          </form>

        </div>
      </React.Fragment>
    )
  }
}

const formDivStyle = {
  padding: '25px'
}
const divStyle = {
  margin: '10px 10%'
}

const formStyle = {
  display: 'flex',
  flex: '2',
  flexDirection: 'column',
  border: '10px solid gray'

}
const h1Style = {
  textAlign: 'center',
  color: 'grey'
}

export default LoginForm;

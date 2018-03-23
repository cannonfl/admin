'use strict';
import React from 'react';
import {render} from 'react-dom';
import {Button} from 'react-bootstrap';

class Login extends React.Component {
  handleClick() {
    console.log('CLICKED');
  }
  render() {
    return (
      <Button onClick={() => this.handleClick()}>Login</Button>
    )
  }
}

export default Login;

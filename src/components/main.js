"use strict"
import React from "react";
import {render} from "react-dom";

import Login from "./login";

class Main extends React.Component {
  render () {
    return (
      <div>
        <h1 className="hello">Hello {this.props.name} from Main.js</h1>
        <Login />
      </div>
    )
  }
}
export default Main;
